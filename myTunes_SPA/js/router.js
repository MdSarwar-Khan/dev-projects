const appEl = document.getElementById("app");
const progressEl = document.getElementById("route-progress");

const SIMULATED_LOAD_MS = 220;

function parseHash() {
    const raw = window.location.hash.replace(/^#\/?/, "").trim();
    return raw === "" ? "home" : raw;
}

function setActiveNavLink(routeName) {
    document.querySelectorAll("#nav-links li").forEach((li) => {
        const link = li.querySelector("a");
        li.classList.toggle("active-link", !!link && link.dataset.route === routeName);
    });
}

function showLoading() {
    progressEl.classList.remove("done");
    progressEl.classList.add("loading");
    appEl.innerHTML = `
        <div class="route-loader">
            <div class="spinner" role="status" aria-label="Loading"></div>
            <p>Loading...</p>
        </div>
    `;
}

function finishLoading() {
    progressEl.classList.remove("loading");
    progressEl.classList.add("done");
}

function renderRoute(routeName) {
    showLoading();

    window.setTimeout(() => {
        try {
            const route = ROUTES[routeName] || null;

            if (!route) {
                appEl.innerHTML = ROUTES.notfound.render(routeName);
                document.title = "myTunes — Page Not Found";
                setActiveNavLink(null);
                finishLoading();
                return;
            }

            appEl.innerHTML = route.render();
            document.title = `myTunes — ${route.title}`;
            setActiveNavLink(routeName);
            state.visitedRoutes.add(routeName);

            if (typeof route.afterRender === "function") {
                route.afterRender();
            }
        } catch (err) {
            console.error("Route render failed:", err);
            appEl.innerHTML = `
                <section class="not-found route-view">
                    <div>
                        <h1>Oops</h1>
                        <p>Something went wrong loading this page. Please try another section.</p>
                    </div>
                </section>
            `;
        } finally {
            finishLoading();
        }
    }, SIMULATED_LOAD_MS);
}

function handleRouteChange() {
    const routeName = parseHash();
    renderRoute(routeName);
}

function initRouter() {
    if (!window.location.hash || window.location.hash === "#") {
        history.replaceState(null, "", "#/home");
    }
    handleRouteChange();
}
window.addEventListener("hashchange", handleRouteChange);

window.addEventListener("DOMContentLoaded", initRouter);
