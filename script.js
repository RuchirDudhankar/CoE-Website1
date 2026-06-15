(function () {
  "use strict";

  const nav = document.querySelector("[data-site-nav]");
  const year = document.querySelector("[data-year]");
  const views = Array.from(document.querySelectorAll("[data-view]"));
  const viewLinks = Array.from(document.querySelectorAll("[data-view-link]"));
  const dropdowns = Array.from(document.querySelectorAll("[data-dropdown]"));
  const appData = window.WINCOE_DATA || {};
  const routeConfig = {
    home: { view: "home", title: "Home" },
    domains: { view: "domains", title: "Domains" },
    "press-media": { view: "press-media", sub: "press-media", title: "Events" },
    events: { view: "press-media", sub: "press-media", title: "Events" },
    "featured-video": { view: "press-media", sub: "featured-video", title: "Featured Videos" },
    gallery: { view: "press-media", sub: "gallery", title: "Gallery" },
    about: { view: "about", sub: "win-coe-iith", title: "About Us" },
    "win-coe-iith": { view: "about", sub: "win-coe-iith", title: "WIN CoE IITH" },
    "wadhwani-foundation": { view: "about", sub: "wadhwani-foundation", title: "Wadhwani Foundation" },
    team: { view: "about", sub: "team", title: "Our Team" },
    join: { view: "join", title: "Join Us" },
    contact: { view: "contact", title: "Contact" }
  };
  const primaryRoutes = new Set(["home", "domains", "press-media", "about", "join", "contact"]);

  if (year) year.textContent = String(new Date().getFullYear());

  const iconPaths = {
    ai: '<path d="M8 6h8v12H8z"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M19 5l-3 3M5 19l3-3M19 19l-3-3"/>',
    quantum: '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v5M15 1v5M9 18v5M15 18v5M1 9h5M1 15h5M18 9h5M18 15h5"/><path d="M10 10h4v4h-4z"/>',
    bio: '<path d="M7 3c6 3 4 15 10 18"/><path d="M17 3C11 6 13 18 7 21"/><path d="M8 7h8M9 11h6M9 15h6M8 19h8"/>',
    health: '<path d="M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 0 0-7.1 7.1L12 21l8.4-8.3a5 5 0 0 0 0-7.1z"/><path d="M4 13h4l1.5-3 3 6 1.5-3h6"/>',
    location: '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/>',
    phone: '<path d="M6.6 2.8 10 6.2 7.8 9c1.4 2.8 3.6 5 6.2 6.2l2.8-2.2 3.4 3.4c.5.5.5 1.3 0 1.8l-1.7 1.7c-.8.8-2 .9-3 .5A22 22 0 0 1 3.6 8.5c-.4-1-.3-2.2.5-3l1.7-1.7c.5-.5 1.3-.5 1.8 0z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>'
  };

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (typeof text === "string") element.textContent = text;
    return element;
  }

  function makeSvgIcon(name) {
    const wrapper = makeElement("span");
    wrapper.setAttribute("aria-hidden", "true");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.innerHTML = iconPaths[name] || iconPaths.ai;
    wrapper.appendChild(svg);
    return wrapper;
  }

  function isSafeHref(href) {
    return /^(#|https:\/\/|mailto:|tel:)/.test(String(href || ""));
  }

  function makeLink(href, text) {
    const link = makeElement("a", "", text);
    if (isSafeHref(href)) link.setAttribute("href", href);
    if (/^https:\/\//.test(String(href || ""))) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
    return link;
  }

  function replaceChildren(target, children) {
    if (!target || !children.length) return;
    target.replaceChildren.apply(target, children);
  }

  function renderProcess() {
    const target = document.querySelector('[data-render="process"]');
    if (!target || !Array.isArray(appData.process)) return;
    replaceChildren(target, appData.process.map(function (item) {
      const article = makeElement("article");
      article.appendChild(makeElement("span", "", item.number || ""));
      article.appendChild(makeElement("h3", "", item.title || ""));
      article.appendChild(makeElement("p", "", item.text || ""));
      return article;
    }));
  }

  function renderImpact() {
    const target = document.querySelector('[data-render="impact"]');
    if (!target || !Array.isArray(appData.impact)) return;
    replaceChildren(target, appData.impact.map(function (item) {
      const article = makeElement("article", "impact-card");
      article.appendChild(makeElement("h3", "", item.title || ""));
      article.appendChild(makeElement("p", "", item.text || ""));
      return article;
    }));
  }

  function renderDomains() {
    const target = document.querySelector('[data-render="domains"]');
    if (!target || !Array.isArray(appData.domains)) return;
    replaceChildren(target, appData.domains.map(function (item) {
      const article = makeElement("article", "domain-card");
      article.appendChild(makeSvgIcon(item.icon));
      article.appendChild(makeElement("h3", "", item.title || ""));
      article.appendChild(makeElement("p", "", item.text || ""));
      return article;
    }));
  }

  function renderEvents() {
    const target = document.querySelector('[data-render="events"]');
    if (!target || !Array.isArray(appData.events)) return;
    replaceChildren(target, appData.events.map(function (item) {
      const article = makeElement("article", item.featured ? "event-card feature-event" : "event-card");
      article.appendChild(makeElement("p", "eyebrow", item.label || "Event"));
      article.appendChild(makeElement("h3", "", item.title || ""));
      article.appendChild(makeElement("p", "", item.text || ""));
      if (item.details && typeof item.details === "object") {
        const list = makeElement("dl");
        Object.keys(item.details).forEach(function (key) {
          const row = makeElement("div");
          row.appendChild(makeElement("dt", "", key));
          row.appendChild(makeElement("dd", "", String(item.details[key])));
          list.appendChild(row);
        });
        article.appendChild(list);
      }
      return article;
    }));
  }

  function renderContactCard() {
    const target = document.querySelector('[data-render="contact-card"]');
    const contact = appData.contact;
    if (!target || !contact) return;
    target.replaceChildren();
    target.appendChild(makeElement("strong", "", contact.title || "WIN Centre of Excellence"));
    (contact.address || []).forEach(function (line) {
      target.appendChild(document.createElement("br"));
      target.appendChild(document.createTextNode(line));
    });
    target.appendChild(document.createElement("br"));
    target.appendChild(makeLink(contact.phoneLink, contact.phone || ""));
    (contact.emails || []).forEach(function (email) {
      target.appendChild(document.createElement("br"));
      target.appendChild(makeLink("mailto:" + email, email));
    });
  }

  function renderJoinCard() {
    const target = document.querySelector('[data-render="join-card"]');
    const join = appData.join;
    if (!target || !join) return;
    target.replaceChildren();
    target.appendChild(makeElement("h3", "", join.title || "Submit an Interest Form"));
    target.appendChild(makeElement("p", "", join.text || ""));
    const actions = makeElement("div", "join-actions");
    (join.actions || []).forEach(function (action) {
      const link = makeLink(action.href, action.label || "Open Form");
      link.className = "button " + (action.style === "secondary" ? "secondary" : "primary");
      actions.appendChild(link);
    });
    target.appendChild(actions);
  }

  function footerContactRow(icon, child) {
    const row = makeElement("p");
    const iconElement = makeSvgIcon(icon);
    iconElement.className = "footer-icon";
    row.appendChild(iconElement);
    row.appendChild(child);
    return row;
  }

  function renderFooterContact() {
    const target = document.querySelector('[data-render="footer-contact"]');
    const contact = appData.contact;
    if (!target || !contact) return;
    const address = makeElement("span");
    address.appendChild(document.createTextNode(contact.title || "WIN Centre of Excellence"));
    (contact.address || []).forEach(function (line) {
      address.appendChild(document.createElement("br"));
      address.appendChild(document.createTextNode(line));
    });
    const emails = makeElement("span");
    (contact.emails || []).forEach(function (email, index) {
      if (index) emails.appendChild(document.createElement("br"));
      emails.appendChild(makeLink("mailto:" + email, email));
    });
    replaceChildren(target, [
      footerContactRow("location", address),
      footerContactRow("phone", makeLink(contact.phoneLink, contact.phone || "")),
      footerContactRow("mail", emails)
    ]);
  }

  function renderGallery() {
    const target = document.querySelector('[data-render="gallery"]');
    if (!target || !Array.isArray(appData.gallery) || !appData.gallery.length) return;
    target.className = "gallery-grid";
    replaceChildren(target, appData.gallery.map(function (item) {
      const figure = makeElement("figure", "gallery-item");
      const image = makeElement("img");
      image.setAttribute("src", item.src || "");
      image.setAttribute("alt", item.alt || item.caption || "WIN CoE gallery image");
      image.setAttribute("loading", "lazy");
      figure.appendChild(image);
      if (item.caption) figure.appendChild(makeElement("figcaption", "", item.caption));
      return figure;
    }));
  }

  function renderDataDrivenContent() {
    renderProcess();
    renderImpact();
    renderDomains();
    renderEvents();
    renderJoinCard();
    renderContactCard();
    renderFooterContact();
    renderGallery();
  }

  renderDataDrivenContent();

  function getRoute() {
    const hash = window.location.hash.replace("#", "") || "home";
    const config = routeConfig[hash] || routeConfig.home;
    return { anchor: routeConfig[hash] ? hash : "home", view: config.view, sub: config.sub || null };
  }

  function setActiveLink(route) {
    viewLinks.forEach(function (link) {
      const hash = link.getAttribute("href").replace("#", "");
      const config = routeConfig[hash] || routeConfig.home;
      const isExact = hash === route.anchor;
      const isMainParent = Boolean(link.closest(".site-nav")) && primaryRoutes.has(hash) && config.view === route.view;
      const isActive = isExact || (isMainParent && !isExact);
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function activateRoute() {
    const route = getRoute();
    views.forEach(function (view) {
      const isActive = view.dataset.view === route.view;
      view.classList.toggle("is-active", isActive);
      view.hidden = !isActive;
      view.setAttribute("aria-hidden", String(!isActive));
    });
    document.querySelectorAll("[data-sub-view]").forEach(function (subView) {
      const parent = subView.closest("[data-view]");
      const shouldShow = parent && parent.dataset.view === route.view && subView.dataset.subView === route.sub;
      subView.classList.toggle("is-sub-active", shouldShow);
      subView.hidden = !shouldShow;
      subView.setAttribute("aria-hidden", String(!shouldShow));
    });
    setActiveLink(route);
    document.title = (routeConfig[route.anchor].title || "WIN CoE") + " | WIN CoE IIT Hyderabad";
    window.requestAnimationFrame(function () { window.scrollTo({ top: 0, behavior: "auto" }); });
    window.setTimeout(function () { window.scrollTo({ top: 0, behavior: "auto" }); }, 80);
  }

  window.addEventListener("hashchange", activateRoute);
  activateRoute();

  if (nav) {
    nav.addEventListener("click", function (event) {
      const target = event.target;
      if (target instanceof HTMLAnchorElement && target.hasAttribute("data-view-link") && target.getAttribute("href") === window.location.hash) {
        activateRoute();
      }
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("is-open");
      });
    });
  }

  function closeOtherDropdowns(activeDropdown) {
    dropdowns.forEach(function (dropdown) {
      const isOpen = dropdown === activeDropdown;
      dropdown.classList.toggle("is-open", isOpen);
      const trigger = dropdown.querySelector("a");
      if (trigger) trigger.setAttribute("aria-expanded", String(isOpen));
    });
  }

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("mouseenter", function () {
      closeOtherDropdowns(dropdown);
    });
    dropdown.addEventListener("focusin", function () {
      closeOtherDropdowns(dropdown);
    });
    dropdown.addEventListener("mouseleave", function () {
      dropdown.classList.remove("is-open");
      const trigger = dropdown.querySelector("a");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });
    dropdown.addEventListener("focusout", function () {
      window.setTimeout(function () {
        if (!dropdown.contains(document.activeElement)) {
          dropdown.classList.remove("is-open");
          const trigger = dropdown.querySelector("a");
          if (trigger) trigger.setAttribute("aria-expanded", "false");
        }
      }, 0);
    });
  });

  dropdowns.forEach(function (dropdown) {
    const trigger = dropdown.querySelector("a");
    if (trigger) {
      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove("is-open");
      const trigger = dropdown.querySelector("a");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });
  });
})();
