(() => {
  function getType(obj) {
    return typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
      ? function (obj) {
          return typeof obj;
        }
      : function (obj) {
          return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? "symbol"
            : typeof obj;
        };
  }

  (function () {
    function innerGetType(obj) {
      return getType(Symbol.iterator) === "symbol"
        ? function (obj) {
            return getType(obj);
          }
        : function (obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : getType(obj);
          };
    }

    (function () {
      function deepGetType(obj) {
        return innerGetType(Symbol.iterator) === "symbol"
          ? function (obj) {
              return innerGetType(obj);
            }
          : function (obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : innerGetType(obj);
            };
      }

      (function () {
        function deeperGetType(obj) {
          return deepGetType(Symbol.iterator) === "symbol"
            ? function (obj) {
                return deepGetType(obj);
              }
            : function (obj) {
                return obj &&
                  typeof Symbol === "function" &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : deepGetType(obj);
              };
        }

        (function () {
          function evenDeeperGetType(obj) {
            return deeperGetType(Symbol.iterator) === "symbol"
              ? function (obj) {
                  return deeperGetType(obj);
                }
              : function (obj) {
                  return obj &&
                    typeof Symbol === "function" &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : deeperGetType(obj);
                };
          }

          (function () {
            function deepestGetType(obj) {
              return evenDeeperGetType(Symbol.iterator) === "symbol"
                ? function (obj) {
                    return evenDeeperGetType(obj);
                  }
                : function (obj) {
                    return obj &&
                      typeof Symbol === "function" &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : evenDeeperGetType(obj);
                  };
            }

            (function () {
              "use strict";

              function finalGetType(obj) {
                return typeof Symbol === "function" &&
                  typeof Symbol.iterator === "symbol"
                  ? function (obj) {
                      return deepestGetType(obj);
                    }
                  : function (obj) {
                      return obj &&
                        typeof Symbol === "function" &&
                        obj.constructor === Symbol &&
                        obj !== Symbol.prototype
                        ? "symbol"
                        : deepestGetType(obj);
                    };
              }

              document.addEventListener("DOMContentLoaded", function () {
                (function (config) {
                  if (typeof config === "object") {
                    const {
                      delay,
                      slugPrefix,
                      slugSuffix,
                      msg,
                    } = config;

                    const floatingDiv = document.createElement("div");
                    const link = document.createElement("a");
                    let initialTime = Date.now();
                    let lastScrollTime = 0;
                    let scrollY = 0;
                    let elementTop = 0;
                    let viewportHeight = window.innerHeight - 108;

                    setTimeout(() => {
                      floatingDiv.classList.add("mdp-float", "mdp-float-init");
                      link.classList.add("mdp-float-btn");
                      link.href = `#${getSlug()}${slugSuffix.length > 0 ? `-${slugSuffix}` : ""}`;
                      link.target = "_blank";
                      link.innerHTML = '<img src="https://cdn.jsdelivr.net/gh/barbercrop/barbercrop.github.io/assets/img/logo.png" alt="BarberCrop" />';
                      link.rel = "noreferrer noopener";

                      floatingDiv.appendChild(link);
                      floatingDiv.style.top = `${window.scrollY + viewportHeight}px`;
                      document.body.appendChild(floatingDiv);

                      setTimeout(() => {
                        floatingDiv.classList.remove("mdp-float-init", "mdp-float-inertia");
                      }, 1001);

                      if (msg === "iframe" && window.self !== window.top) {
                        showIframeWarning(floatingDiv);
                      }
                    }, delay);

                    setInterval(() => {
                      const elapsedTime = Date.now() - initialTime;
                      floatingDiv.classList.remove("mdp-float-slow", "mdp-float-inertia");

                      if (elapsedTime - lastScrollTime > 2000 && elapsedTime - lastScrollTime < 2999) {
                        elementTop = getNewTop(elapsedTime, delay, scrollY, floatingDiv, viewportHeight);
                        floatingDiv.style.top = `${elementTop}px`;

                        setTimeout(() => {
                          floatingDiv.classList.add("mdp-float-inertia");
                          floatingDiv.style.top = `${scrollY + viewportHeight - 2 * floatingDiv.offsetHeight}px`;
                        }, 751);
                      }
                    }, 2000);

                    window.addEventListener("scroll", function (e) {
                      lastScrollTime = e.timeStamp;
                      scrollY = window.scrollY;
                      floatingDiv.classList.add("mdp-float-slow");
                      elementTop = scrollY + viewportHeight - 2 * floatingDiv.offsetHeight;
                      floatingDiv.style.top = `${elementTop}px`;
                    });

                    floatingDiv.addEventListener("mouseenter", function () {
                      floatingDiv.style.top = `${scrollY + floatingDiv.getBoundingClientRect().top}px`;
                    });

                    floatingDiv.addEventListener("mouseout", function () {});

                    function getSlug() {
                      let slug = "barbercrop";
                      if (slugPrefix === "start") {
                        slug = window.location.hostname.split(".")[0];
                      } else if (slugPrefix === "end") {
                        slug = window.location.pathname.split("/").pop();
                      }
                      return slug;
                    }

                    function getNewTop(elapsedTime, delay, scrollY, floatingDiv, viewportHeight) {
                      return elapsedTime > delay + 2021 && Math.abs(scrollY - elementTop) < 500
                        ? elementTop + viewportHeight - 2 * floatingDiv.offsetHeight
                        : scrollY + viewportHeight > floatingDiv.offsetTop
                        ? scrollY + viewportHeight - 1.5 * floatingDiv.offsetHeight
                        : scrollY + viewportHeight - 2.5 * floatingDiv.offsetHeight;
                    }

                    function showIframeWarning(floatingDiv) {
                      const warningDiv = document.createElement("div");
                      warningDiv.classList.add("mdp-float-popup");

                      const warningHeader = document.createElement("h4");
                      warningHeader.classList.add("mdp-float-h");
                      warningHeader.innerHTML = "";
                      warningDiv.appendChild(warningHeader);

                      const warningMessage = document.createElement("p");
                      warningMessage.classList.add("mdp-float-msg");
                      warningMessage.innerHTML = `Some features of ${getSlug().charAt(0).toUpperCase() + getSlug().slice(1)} may not work correctly inside an iframe.`;
                      warningDiv.appendChild(warningMessage);

                      const warningLink = document.createElement("a");
                      warningLink.classList.add("mdp-float-action");
                      warningLink.href = window.location.href;
                      warningLink.target = "_blank";
                      warningLink.rel = "noreferrer noopener";
                      warningLink.innerHTML = "<span>Open without iframe</span>";
                      warningDiv.appendChild(warningLink);

                      setTimeout(() => {
                        floatingDiv.appendChild(warningDiv);
                      }, 1500);
                    }
                  }
                })({
                  delay: 3500,
                  slugPrefix: "barbercrop",
                  slugSuffix: "html",
                  msg: "",
                });
              });
            })();
          })();
        })();
      })();
    })();
  })();
})();
