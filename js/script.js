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
        id: "meals",
        title: "Meals & snacks",
        kind: "meals",
        meals: [
          {
            filename: "IMG_0124.jpg",
            title: "Pasta with tomato sauce and egg",
            description: "Pasta with tomato sauce and a savoury topping, served with sliced hard-boiled egg and cabbage."
          },
          {
            filename: "IMG_0125.jpg",
            title: "Chicken bites with mash and carrots",
            description: "Golden chicken bites are served with creamy mashed potato and bright carrot sticks."
          },
          {
            filename: "IMG_0126.jpg",
            title: "Pasta with mince and fresh sides",
            description: "Pasta with a savoury mince topping, accompanied by cucumber slices and beetroot."
          },
          {
            filename: "IMG_0127.jpg",
            title: "Toasted sandwiches and potato wedges",
            description: "Toasted sandwich triangles and seasoned potato wedges, with tomato sauce on the side."
          },
          {
            filename: "IMG_0129.jpg",
            title: "Fatcake and potato wedges",
            description: "Fatcakes served with potato wedges and a little tomato sauce for dipping."
          },
          {
            filename: "IMG_0128.jpg",
            title: "Rice, stew and vegetables",
            description: "Yellow rice and a hearty-looking stew are served with carrot sticks, a creamy slaw and sausage."
          },
          {
            filename: "IMG_0130.jpg",
            title: "Chicken and rice with sweetcorn",
            description: "A colourful plate of yellow rice with saucy chicken and tomato, a golden savoury side and sweetcorn."
          },
          {
            filename: "IMG_0131.jpg",
            title: "Soft pap with chicken",
            description: "Soft pap is paired with golden chicken pieces and a little gravy."
          },
          {
            filename: "IMG_0132.jpg",
            title: "A warm bowl of oats",
            description: "Oats are served in colourful bowls for a cosy breakfast."
          },
          {
            filename: "IMG_0133.jpg",
            title: "Porridge time",
            description: "A little one enjoys a bowl of soft porridge at the table."
          },
          {
            filename: "IMG_0134.jpg",
            title: "Mince and potato with mash",
            description: "A savoury mince-and-potato stew is served with mashed potato and cucumber slices."
          },
          {
            filename: "IMG_0135.jpg",
            title: "Fruit, yoghurt and a wafer",
            description: "Fresh apple pieces and a wafer biscuit are served alongside a smooth, creamy snack."
          },
          {
            filename: "IMG_0136.jpg",
            title: "A little cake treat",
            description: "A small slice of golden cake makes a simple teatime treat."
          },
          {
            filename: "IMG_0137.jpg",
            title: "Pap with stew and pumpkin",
            description: "Soft pap is served with a savoury chicken stew and a golden pumpkin side."
          },
          {
            filename: "IMG_0138.jpg",
            title: "Enjoying a bowl together",
            description: "Little ones tuck into a soft, warm bowl of porridge."
          },
          {
            filename: "IMG_0139.jpg",
            title: "Custard, orange and wafer",
            description: "A sweet snack of creamy custard, juicy orange pieces and a crisp wafer biscuit."
          },
          {
            filename: "IMG_0140.jpg",
            title: "Banana and orange snack",
            description: "Fresh banana and orange segments are served in child-size portions."
          },
          {
            filename: "IMG_0141.jpg",
            title: "Fruit with creamy custard",
            description: "A colourful snack of creamy custard, orange pieces and grapes."
          }
        ]
      },
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
    const menuCategories = galleryCategories
      .filter((category) => !schoolInfoCategories.includes(category))
      .sort((first, second) => (
        first.id === "facilities" ? -1 : second.id === "facilities" ? 1 : 0
      ));

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
        : category.meals
          ? category.meals.length
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
      if (category.meals) {
        content = `
          <div class="meal-list">
            ${category.meals.map((meal) => {
              const imageUrl = encodeURI(`assets/images/meals/${meal.filename}`);
              return `
                <article class="meal-card">
                  <a class="meal-card-image gallery-image" href="${imageUrl}" aria-label="View ${meal.title}">
                    <img src="${imageUrl}" alt="${meal.title}" loading="lazy" decoding="async">
                  </a>
                  <div class="meal-card-copy">
                    <h4>${meal.title}</h4>
                    <p>${meal.description}</p>
                  </div>
                </article>
              `;
            }).join("")}
          </div>
        `;
      } else if (category.groups) {
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
    const intentForm = document.querySelector("#intent-form");
    const childDateOfBirth = intentForm.querySelector('[name="child_date_of_birth"]');

    const today = new Date();
    childDateOfBirth.max = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0")
    ].join("-");

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
