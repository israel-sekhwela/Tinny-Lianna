    const menuButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#nav-links");

    menuButton.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      menuButton.textContent = isOpen ? "×" : "☰";
    });

    menu.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        menu.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.textContent = "☰";
      }
    });

    document.querySelector("#year").textContent = String(new Date().getFullYear());

    const photoList = (folder, filenames, labels) => filenames.map((filename, index) => ({
      src: `assets/images/${folder}/${filename}`,
      alt: labels[index]
    }));

    const galleryCategories = [
      {
        id: "facilities",
        title: "Facilities",
        kind: "photos",
        images: photoList("facilitiy", [
          "282d38c0-6fbf-4a63-8aa8-82088f3ed611.JPG",
          "2b96ad7a-41dc-4246-924b-535cc907a5e4.JPG",
          "9291b465-4b5e-4759-b079-a5285ce06835.JPG",
          "92c710d2-5041-4353-8086-d5b1d3677f23.JPG",
          "9915abfe-c6a2-4ee7-8b64-a46b4611d214.JPG",
          "a58123f1-7c54-4ff5-9305-92c651641abf.JPG",
          "bd6f6888-b5a5-4f2e-8882-c81fced771f5.JPG",
          "d1ed9a27-3a38-4228-8f97-bedc2a4f7374.JPG",
          "dcb543c9-3fcf-468e-9dc6-cbbb3420d797.JPG",
          "f1398835-01d8-48ec-bc38-576872688045.JPG",
          "f51b3d1b-ce4c-4e91-a326-5b9e4b658c07.JPG",
          "fa1ce9da-61b8-4789-9982-e7e8d90ca88a.JPG"
        ], [
          "Class Room",
          "Play Area",
          "Passage",
          "Waiting Area",
          "Class Room",
          "Bed",
          "Play Area",
          "Play Area",
          "Class Room",
          "Class Area",
          "Play Area",
          "Entrance"
        ])
      },
      {
        id: "banner",
        title: "Banner",
        kind: "photos",
        images: [{
          src: "assets/images/banner/8b599078-5176-4343-a790-fda78616f748.JPG",
          alt: "Tinny Lianna's Daycare banner"
        }]
      },
      {
        id: "programme",
        title: "Daily programme",
        kind: "document",
        images: [{
          src: "assets/images/daily programme/Tinny_Lianna_Daily_Programme.PNG",
          alt: "Tinny Lianna's Daycare daily programme"
        }]
      }
    ];

    const galleryMenu = document.querySelector("#gallery-menu");
    const galleryCollections = document.querySelector("#gallery-collections");
    const schoolInfoCategories = galleryCategories.filter((category) =>
      category.id === "banner" || category.id === "programme"
    );
    const menuCategories = galleryCategories.filter((category) =>
      !schoolInfoCategories.includes(category)
    );

    const renderImages = (images, kind = "photos") => `
      <div class="gallery-grid gallery-grid--${kind}">
        ${images.map((image) => {
          const imageUrl = encodeURI(image.src);
          const imageClass = kind === "document" ? " gallery-image--document" : "";
          return `
            <a class="gallery-image${imageClass}" href="${imageUrl}" aria-label="View ${image.alt}">
              <img src="${imageUrl}" alt="${image.alt}" loading="lazy" decoding="async">
            </a>
          `;
        }).join("")}
      </div>
    `;

    const renderMenuLink = (category) => {
      const count = category.groups
        ? category.groups.reduce((total, group) => total + group.images.length, 0)
        : category.images.length;
      const countLabel = count ? `${count} ${count === 1 ? "image" : "images"}` : "Coming soon";
      return `<a href="#gallery-${category.id}">${category.title}<small>${countLabel}</small></a>`;
    };

    galleryMenu.innerHTML = `
      ${menuCategories.map(renderMenuLink).join("")}
      <div class="gallery-menu-group" role="group" aria-label="School Info">
        <h3>School Info</h3>
        <div class="gallery-menu-group-links">
          ${schoolInfoCategories.map(renderMenuLink).join("")}
        </div>
      </div>
    `;

    const renderCollection = (category, headingTag = "h3") => {
      let content;
      if (category.groups) {
        content = category.groups.map((group) => `
          <section class="gallery-subcollection" id="gallery-${group.id}">
            <h4>${group.title}</h4>
            ${renderImages(group.images)}
          </section>
        `).join("");
      } else if (category.images.length) {
        content = renderImages(category.images, category.kind);
      } else {
        content = '<p class="gallery-empty">Facility photos coming soon.</p>';
      }
      return `
        <section class="gallery-collection" id="gallery-${category.id}">
          <${headingTag}>${category.title}</${headingTag}>
          ${content}
        </section>
      `;
    };

    galleryCollections.innerHTML = `
      ${menuCategories.map((category) => renderCollection(category)).join("")}
      <section class="gallery-collection" id="gallery-school-info">
        <h3>School Info</h3>
        <div class="gallery-school-info-grid">
          ${schoolInfoCategories.map((category) => renderCollection(category, "h4")).join("")}
        </div>
      </section>
    `;

    const imageModal = document.querySelector("#image-modal");
    const modalImage = document.querySelector("#image-modal-image");
    const modalCaption = document.querySelector("#image-modal-caption");

    galleryCollections.addEventListener("click", (event) => {
      const link = event.target instanceof Element
        ? event.target.closest("a.gallery-image")
        : null;
      if (!link) return;

      event.preventDefault();
      const image = link.querySelector("img");
      if (!image) return;

      modalImage.src = image.src;
      modalImage.alt = image.alt;
      modalCaption.textContent = image.alt;
      imageModal.showModal();
    });

    imageModal.querySelector(".image-modal-close").addEventListener("click", () => {
      imageModal.close();
    });

    imageModal.addEventListener("click", (event) => {
      if (event.target === imageModal) imageModal.close();
    });

    imageModal.addEventListener("cancel", (event) => {
      event.preventDefault();
      imageModal.close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && imageModal.open) imageModal.close();
    });

    const intentModal = document.querySelector("#intent-modal");
    const intentOpenButton = document.querySelector(".intent-open");

    intentOpenButton.addEventListener("click", () => {
      intentModal.showModal();
    });

    intentModal.querySelector(".intent-modal-close").addEventListener("click", () => {
      intentModal.close();
    });

    intentModal.addEventListener("click", (event) => {
      if (event.target === intentModal) intentModal.close();
    });

    intentModal.addEventListener("cancel", (event) => {
      event.preventDefault();
      intentModal.close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && intentModal.open) intentModal.close();
    });
    const menuButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#nav-links");

    menuButton.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      menuButton.textContent = isOpen ? "×" : "☰";
    });

    menu.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        menu.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.textContent = "☰";
      }
    });

    document.querySelector("#year").textContent = String(new Date().getFullYear());

    const photoList = (folder, filenames, description) => filenames.map((filename, index) => ({
      src: `assets/images/${folder}/${filename}`,
      alt: `${description} photo ${index + 1}`
    }));

    const galleryCategories = [
      {
        id: "facilities",
        title: "Facilities",
        kind: "photos",
        images: photoList("facilitiy", [
          "282d38c0-6fbf-4a63-8aa8-82088f3ed611.JPG",
          "2b96ad7a-41dc-4246-924b-535cc907a5e4.JPG",
          "9291b465-4b5e-4759-b079-a5285ce06835.JPG",
          "92c710d2-5041-4353-8086-d5b1d3677f23.JPG",
          "9915abfe-c6a2-4ee7-8b64-a46b4611d214.JPG",
          "a58123f1-7c54-4ff5-9305-92c651641abf.JPG",
          "bd6f6888-b5a5-4f2e-8882-c81fced771f5.JPG",
          "c71a7e93-6740-44ef-8afe-da571bef6d59.JPG",
          "d1ed9a27-3a38-4228-8f97-bedc2a4f7374.JPG",
          "dcb543c9-3fcf-468e-9dc6-cbbb3420d797.JPG",
          "f1398835-01d8-48ec-bc38-576872688045.JPG",
          "f51b3d1b-ce4c-4e91-a326-5b9e4b658c07.JPG",
          "fa1ce9da-61b8-4789-9982-e7e8d90ca88a.JPG"
        ], "Daycare facility")
      },
      {
        id: "banner",
        title: "Banner",
        kind: "photos",
        images: [{
          src: "assets/images/banner/8b599078-5176-4343-a790-fda78616f748.JPG",
          alt: "Tinny Lianna's Daycare banner"
        }]
      },
      {
        id: "programme",
        title: "Daily programme",
        kind: "document",
        images: [{
          src: "assets/images/daily programme/Tinny_Lianna_Daily_Programme.PNG",
          alt: "Tinny Lianna's Daycare daily programme"
        }]
      }
    ];

    const galleryMenu = document.querySelector("#gallery-menu");
    const galleryCollections = document.querySelector("#gallery-collections");
    const schoolInfoCategories = galleryCategories.filter((category) =>
      category.id === "banner" || category.id === "programme"
    );
    const menuCategories = galleryCategories.filter((category) =>
      !schoolInfoCategories.includes(category)
    );

    const renderImages = (images, kind = "photos") => `
      <div class="gallery-grid gallery-grid--${kind}">
        ${images.map((image) => {
          const imageUrl = encodeURI(image.src);
          const imageClass = kind === "document" ? " gallery-image--document" : "";
          return `
            <a class="gallery-image${imageClass}" href="${imageUrl}" aria-label="View ${image.alt}">
              <img src="${imageUrl}" alt="${image.alt}" loading="lazy" decoding="async">
            </a>
          `;
        }).join("")}
      </div>
    `;

    const renderMenuLink = (category) => {
      const count = category.groups
        ? category.groups.reduce((total, group) => total + group.images.length, 0)
        : category.images.length;
      const countLabel = count ? `${count} ${count === 1 ? "image" : "images"}` : "Coming soon";
      return `<a href="#gallery-${category.id}">${category.title}<small>${countLabel}</small></a>`;
    };

    galleryMenu.innerHTML = `
      ${menuCategories.map(renderMenuLink).join("")}
      <div class="gallery-menu-group" role="group" aria-label="School Info">
        <h3>School Info</h3>
        <div class="gallery-menu-group-links">
          ${schoolInfoCategories.map(renderMenuLink).join("")}
        </div>
      </div>
    `;

    const renderCollection = (category, headingTag = "h3") => {
      let content;
      if (category.groups) {
        content = category.groups.map((group) => `
          <section class="gallery-subcollection" id="gallery-${group.id}">
            <h4>${group.title}</h4>
            ${renderImages(group.images)}
          </section>
        `).join("");
      } else if (category.images.length) {
        content = renderImages(category.images, category.kind);
      } else {
        content = '<p class="gallery-empty">Facility photos coming soon.</p>';
      }
      return `
        <section class="gallery-collection" id="gallery-${category.id}">
          <${headingTag}>${category.title}</${headingTag}>
          ${content}
        </section>
      `;
    };

    galleryCollections.innerHTML = `
      ${menuCategories.map((category) => renderCollection(category)).join("")}
      <section class="gallery-collection" id="gallery-school-info">
        <h3>School Info</h3>
        <div class="gallery-school-info-grid">
          ${schoolInfoCategories.map((category) => renderCollection(category, "h4")).join("")}
        </div>
      </section>
    `;

    const imageModal = document.querySelector("#image-modal");
    const modalImage = document.querySelector("#image-modal-image");
    const modalTitle = document.querySelector("#image-modal-title");
    const modalCaption = document.querySelector("#image-modal-caption");

    galleryCollections.addEventListener("click", (event) => {
      const link = event.target instanceof Element
        ? event.target.closest("a.gallery-image")
        : null;
      if (!link) return;

      event.preventDefault();
      const image = link.querySelector("img");
      if (!image) return;

      modalImage.src = image.src;
      modalImage.alt = image.alt;
      modalTitle.textContent = image.alt;
      modalCaption.textContent = image.alt;
      imageModal.showModal();
    });

    imageModal.querySelector(".image-modal-close").addEventListener("click", () => {
      imageModal.close();
    });

    imageModal.addEventListener("click", (event) => {
      if (event.target === imageModal) imageModal.close();
    });

    imageModal.addEventListener("cancel", (event) => {
      event.preventDefault();
      imageModal.close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && imageModal.open) imageModal.close();
    });

    const intentModal = document.querySelector("#intent-modal");
    const intentOpenButton = document.querySelector(".intent-open");

    intentOpenButton.addEventListener("click", () => {
      intentModal.showModal();
    });

    intentModal.querySelector(".intent-modal-close").addEventListener("click", () => {
      intentModal.close();
    });

    intentModal.addEventListener("click", (event) => {
      if (event.target === intentModal) intentModal.close();
    });

    intentModal.addEventListener("cancel", (event) => {
      event.preventDefault();
      intentModal.close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && intentModal.open) intentModal.close();
    });
