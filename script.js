// Données du menu extraites du menu Lua FiveM
const menuData = {
    player: {
        title: "Player",
        options: [
            { label: "Entités", type: "action", category: "entities" },
            { label: "Custom Outfits", type: "action", category: "outfits" },
            { label: "Noclip", type: "toggle", value: false },
            { label: "GodMode", type: "toggle", value: false },
            { label: "Super saut", type: "toggle", value: false },
            { label: "Invisibility", type: "toggle", value: false },
            { label: "Vitesse", type: "slider", value: 1.0, min: 1.0, max: 10.0, step: 0.5 },
            { label: "Stamina infinie", type: "toggle", value: false },
            { label: "Changer skin", type: "action" },
            { label: "Soigner", type: "action" },
            { label: "Remplir armure", type: "action" },
            { label: "Revive", type: "action" },
            { label: "Suicide", type: "action" },
            { label: "Tirer une bulle", type: "action" }
        ]
    },
    entities: {
        title: "Entités",
        options: [
            { label: "Détacher toutes entités", type: "action" },
            { label: "Robot de bus", type: "toggle", value: false },
            { label: "Feux d'artifice", type: "toggle", value: false }
        ]
    },
    outfits: {
        title: "Custom Outfits",
        options: [
            { label: "Outfits Addon", type: "action" },
            { label: "Visage (Head)", type: "slider", value: 0, min: -1, max: 50, step: 1 },
            { label: "Masques (Mask)", type: "slider", value: 0, min: -1, max: 50, step: 1 },
            { label: "Cheveux (Hair)", type: "slider", value: 0, min: -1, max: 50, step: 1 },
            { label: "Torses (Torso)", type: "slider", value: 0, min: -1, max: 50, step: 1 },
            { label: "Jambes (Legs)", type: "slider", value: 0, min: -1, max: 50, step: 1 },
            { label: "Sacs (Bags)", type: "slider", value: 0, min: -1, max: 50, step: 1 },
            { label: "Chaussures (Shoes)", type: "slider", value: 0, min: -1, max: 50, step: 1 },
            { label: "Accessoires", type: "slider", value: 0, min: -1, max: 50, step: 1 },
            { label: "Sous-vêtements", type: "slider", value: 0, min: -1, max: 50, step: 1 },
            { label: "Gilets pare-balles", type: "slider", value: 0, min: -1, max: 50, step: 1 },
            { label: "Décalcomanies", type: "slider", value: 0, min: -1, max: 50, step: 1 },
            { label: "Hauts (Tops)", type: "slider", value: 0, min: -1, max: 50, step: 1 },
            { label: "Réinitialiser tenue", type: "action" }
        ]
    },
    online: {
        title: "Online",
        options: [
            { label: "Player 1 (ID: 1)", type: "action" },
            { label: "Player 2 (ID: 2)", type: "action" },
            { label: "Player 3 (ID: 3)", type: "action" },
            { label: "Troll Options", type: "action", category: "troll" },
            { label: "Spectate Player", type: "toggle", value: false },
            { label: "TP vers joueur", type: "action" },
            { label: "TP vers moi", type: "action" },
            { label: "Faire exploser", type: "action" }
        ]
    },
    troll: {
        title: "Troll Options",
        options: [
            { label: "Fuck Player", type: "action" },
            { label: "Véhicules Troll", type: "action" },
            { label: "Crash Player", type: "action" },
            { label: "Spectate Player", type: "toggle", value: false },
            { label: "Faire exploser", type: "action" },
            { label: "TP vers moi", type: "action" },
            { label: "TP vers lui", type: "action" },
            { label: "Spawn PNJ autour", type: "action" },
            { label: "Cage joueur", type: "action" },
            { label: "Donner arme", type: "action" },
            { label: "Supprimer armes", type: "action" },
            { label: "Freeze joueur", type: "toggle", value: false },
            { label: "Invisible", type: "toggle", value: false },
            { label: "Spam véhicules", type: "toggle", value: false }
        ]
    },
    weapon: {
        title: "Weapon",
        options: [
            { label: "Donner armes", type: "action", category: "weaponlist" },
            { label: "Weapon Custom", type: "action", category: "weaponcustom" },
            { label: "Weapon Mods", type: "action", category: "weaponmods" },
            { label: "Enlever composants", type: "action" },
            { label: "Vehicle Gun", type: "toggle", value: false },
            { label: "Dégâts infinis", type: "toggle", value: false },
            { label: "Munitions infinies", type: "toggle", value: false },
            { label: "Pas de rechargement", type: "toggle", value: false },
            { label: "Pas de recul", type: "toggle", value: false },
            { label: "Rapid Fire", type: "toggle", value: false },
            { label: "One shot kill", type: "toggle", value: false },
            { label: "Effets visuels", type: "dropdown", values: ["Normal", "Feu", "Explosion", "Laser"], selected: 0 }
        ]
    },
    weaponmods: {
        title: "Weapon Mods",
        options: [
            { label: "Balles explosives", type: "toggle", value: false },
            { label: "Balles de feu", type: "toggle", value: false },
            { label: "Balles véhicules", type: "toggle", value: false }
        ]
    },
    weaponcustom: {
        title: "Weapon Custom",
        options: [
            { label: "Teinte: Normal", type: "action" },
            { label: "Teinte: Green", type: "action" },
            { label: "Teinte: Gold", type: "action" },
            { label: "Teinte: Pink", type: "action" },
            { label: "Teinte: Army", type: "action" },
            { label: "Teinte: LSPD", type: "action" },
            { label: "Teinte: Orange", type: "action" },
            { label: "Teinte: Platinum", type: "action" },
            { label: "Silencieux", type: "action" },
            { label: "Chargeur étendu", type: "action" },
            { label: "Lampe torche", type: "action" },
            { label: "Poignée", type: "action" },
            { label: "Viseur holographique", type: "action" },
            { label: "Lunette avancée", type: "action" }
        ]
    },
    weaponlist: {
        title: "Liste Armes",
        options: [
            { label: "MELEE", type: "section" },
            { label: "Knife", type: "action" },
            { label: "Nightstick", type: "action" },
            { label: "Hammer", type: "action" },
            { label: "Bat", type: "action" },
            { label: "Crowbar", type: "action" },
            { label: "HANDGUNS", type: "section" },
            { label: "Pistol", type: "action" },
            { label: "Combat Pistol", type: "action" },
            { label: "Pistol .50", type: "action" },
            { label: "Heavy Pistol", type: "action" },
            { label: "Revolver", type: "action" },
            { label: "SMG", type: "section" },
            { label: "Micro SMG", type: "action" },
            { label: "SMG", type: "action" },
            { label: "Assault SMG", type: "action" },
            { label: "Combat MG", type: "action" },
            { label: "SHOTGUNS", type: "section" },
            { label: "Pump Shotgun", type: "action" },
            { label: "Sawed-Off", type: "action" },
            { label: "Assault Shotgun", type: "action" },
            { label: "Heavy Shotgun", type: "action" },
            { label: "RIFLES", type: "section" },
            { label: "Assault Rifle", type: "action" },
            { label: "Carbine Rifle", type: "action" },
            { label: "Special Carbine", type: "action" },
            { label: "Bullpup Rifle", type: "action" },
            { label: "SNIPERS", type: "section" },
            { label: "Sniper Rifle", type: "action" },
            { label: "Heavy Sniper", type: "action" },
            { label: "Marksman Rifle", type: "action" },
            { label: "HEAVY", type: "section" },
            { label: "RPG", type: "action" },
            { label: "Grenade Launcher", type: "action" },
            { label: "Homing Launcher", type: "action" },
            { label: "Minigun", type: "action" },
            { label: "Railgun", type: "action" }
        ]
    },
    settings: {
        title: "Settings",
        options: [
            { label: "Interface Settings", type: "action", category: "interface" },
            { label: "Thème", type: "action", category: "theme" },
            { label: "Position Menu", type: "action" },
            { label: "Afficher FPS", type: "toggle", value: false },
            { label: "Mode discret", type: "toggle", value: false },
            { label: "UI transparente", type: "toggle", value: false },
            { label: "Notifications", type: "toggle", value: true }
        ]
    },
    interface: {
        title: "Interface Settings",
        options: [
            { label: "Glow Effect", type: "slider", value: 1.0, min: 0.0, max: 2.0, step: 0.1 },
            { label: "Menu Animation Delay", type: "slider", value: 0.25, min: 0.05, max: 0.50, step: 0.05 }
        ]
    },
    theme: {
        title: "Thème",
        options: [
            { label: "Rouge", type: "action" },
            { label: "Bleu Ciel", type: "action" },
            { label: "Violet", type: "action" },
            { label: "Halloween", type: "action" },
            { label: "Dark", type: "action" },
            { label: "French", type: "action" },
            { label: "Pink", type: "action" },
            { label: "Red", type: "action" },
            { label: "Russia", type: "action" },
            { label: "Green Smoke", type: "action" },
            { label: "Purple Smoke", type: "action" },
            { label: "Winter", type: "action" },
            { label: "Blue Smoke", type: "action" },
            { label: "Retro", type: "action" }
        ]
    },
    vehicle: {
        title: "Vehicle",
        options: [
            { label: "Spawn véhicule", type: "action", category: "vehiclelist" },
            { label: "Spawn Véhicule Addon", type: "action" },
            { label: "Supprimer véhicule", type: "action" },
            { label: "Réparer véhicule", type: "action" },
            { label: "Boost moteur", type: "toggle", value: false },
            { label: "Voler vers moi", type: "action" },
            { label: "Couleur néon", type: "dropdown", values: ["Off", "Red", "Blue", "Green", "Rainbow"], selected: 0 }
        ]
    },
    vehiclelist: {
        title: "Liste Véhicules",
        options: [
            { label: "SUPER CARS", type: "section" },
            { label: "Adder", type: "action" },
            { label: "Banshee 900R", type: "action" },
            { label: "Bullet", type: "action" },
            { label: "Cheetah", type: "action" },
            { label: "Entity XF", type: "action" },
            { label: "FMJ", type: "action" },
            { label: "Infernus", type: "action" },
            { label: "Osiris", type: "action" },
            { label: "T20", type: "action" },
            { label: "Zentorno", type: "action" },
            { label: "SPORTS", type: "section" },
            { label: "Alpha", type: "action" },
            { label: "Banshee", type: "action" },
            { label: "Buffalo", type: "action" },
            { label: "Comet", type: "action" },
            { label: "Elegy RH8", type: "action" },
            { label: "Jester", type: "action" },
            { label: "Kuruma", type: "action" },
            { label: "Sultan", type: "action" },
            { label: "MOTORCYCLES", type: "section" },
            { label: "Akuma", type: "action" },
            { label: "Bati 801", type: "action" },
            { label: "Hakuchou", type: "action" },
            { label: "PCJ 600", type: "action" },
            { label: "HELICOPTERS", type: "section" },
            { label: "Buzzard", type: "action" },
            { label: "Savage", type: "action" },
            { label: "Hunter", type: "action" },
            { label: "PLANES", type: "section" },
            { label: "Hydra", type: "action" },
            { label: "Lazer", type: "action" },
            { label: "Jet", type: "action" }
        ]
    },
    misc: {
        title: "Miscellaneous",
        options: [
            { label: "Clear screen effects", type: "action" },
            { label: "Clear tasks", type: "dropdown", values: ["Primary", "Secondary", "All"], selected: 0 },
            { label: "Refresh interior", type: "action" },
            { label: "Simple drug selling", type: "action" },
            { label: "Fall", type: "toggle", value: false },
            { label: "No ragdoll", type: "toggle", value: false },
            { label: "No collision", type: "toggle", value: false },
            { label: "Solo session", type: "toggle", value: false },
            { label: "Friendly fire", type: "toggle", value: false },
            { label: "Burning mode", type: "toggle", value: false },
            { label: "Force third-person camera", type: "toggle", value: false },
            { label: "Psychgun", type: "toggle", value: false },
            { label: "Other", type: "section" },
            { label: "Door unlocker", type: "toggle", value: false },
            { label: "Time", type: "action", category: "time" },
            { label: "Freecam", type: "action", category: "freecam" },
            { label: "TP au waypoint", type: "action" },
            { label: "Nettoyer map", type: "action" },
            { label: "Donner argent", type: "action" },
            { label: "Clear wanted", type: "action" }
        ]
    },
    time: {
        title: "Time",
        options: [
            { label: "Heure", type: "slider", value: 12, min: 0, max: 23, step: 1 },
            { label: "Clear", type: "toggle", value: false },
            { label: "Extra Sunny", type: "toggle", value: false },
            { label: "Clouds", type: "toggle", value: false },
            { label: "Overcast", type: "toggle", value: false },
            { label: "Rain", type: "toggle", value: false },
            { label: "Thunder", type: "toggle", value: false },
            { label: "Snow", type: "toggle", value: false },
            { label: "Blizzard", type: "toggle", value: false },
            { label: "Halloween", type: "toggle", value: false }
        ]
    },
    freecam: {
        title: "Freecam",
        options: [
            { label: "Activer Freecam", type: "toggle", value: false },
            { label: "Vitesse Freecam", type: "slider", value: 1.0, min: 0.1, max: 10.0, step: 0.5 },
            { label: "Boost Véhicule", type: "toggle", value: false },
            { label: "Clone Player", type: "toggle", value: false },
            { label: "Physic Props", type: "toggle", value: false },
            { label: "Physic Véhicule", type: "toggle", value: false }
        ]
    },
    folder: {
        title: "Search",
        options: [
            { label: "Rechercher...", type: "action" },
            { label: "Favoris", type: "action" },
            { label: "Historique", type: "action" }
        ]
    },
    visual: {
        title: "Visual",
        options: [
            { label: "ESP Skeleton", type: "toggle", value: false },
            { label: "ESP Box", type: "toggle", value: false },
            { label: "ESP Snaplines", type: "toggle", value: false },
            { label: "ESP Health Bar", type: "toggle", value: false },
            { label: "ESP Name", type: "toggle", value: false },
            { label: "ESP Settings", type: "action", category: "espsettings" }
        ]
    },
    espsettings: {
        title: "ESP Settings",
        options: [
            { label: "Draw Peds", type: "toggle", value: true },
            { label: "Draw Players", type: "toggle", value: true },
            { label: "Draw Dead", type: "toggle", value: false },
            { label: "Draw Self", type: "toggle", value: false },
            { label: "Distance", type: "slider", value: 500, min: 50, max: 1000, step: 50 }
        ]
    },
    server: {
        title: "Server",
        options: [
            { label: "Clear World", type: "action" },
            { label: "Fuck maps", type: "toggle", value: false },
            { label: "Effect serveur", type: "toggle", value: false },
            { label: "Fuck player", type: "toggle", value: false },
            { label: "Spawn big tube", type: "action" },
            { label: "Fuck props", type: "toggle", value: false }
        ]
    }
};

// État actuel
let currentCategory = 'player';
let activeOptions = {};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initializeCategories();
    loadCategory('player');
});

// Initialiser les catégories
function initializeCategories() {
    const categories = document.querySelectorAll('.category-item');
    const categoryMap = ['player', 'online', 'server', 'weapon', 'vehicle', 'visual', 'misc', 'settings', 'folder'];
    
    categories.forEach((cat, index) => {
        if (!cat.classList.contains('user-avatar') && index < categoryMap.length) {
            const categoryKey = categoryMap[index];
            cat.addEventListener('click', () => {
                categories.forEach(c => c.classList.remove('active'));
                cat.classList.add('active');
                loadCategory(categoryKey);
            });
        }
    });
}

// Charger une catégorie
function loadCategory(categoryKey) {
    currentCategory = categoryKey;
    const data = menuData[categoryKey];
    if (!data) return;

    document.getElementById('category-title').textContent = data.title;
    const leftOptions = document.getElementById('left-options');
    leftOptions.innerHTML = '';

    data.options.forEach((option, index) => {
        const optionElement = createOptionElement(option, categoryKey, index);
        leftOptions.appendChild(optionElement);
    });

    // Charger les options du panneau droit (Miscellaneous par défaut)
    loadRightPanel();
}

// Charger le panneau de droite
function loadRightPanel() {
    const rightOptions = document.getElementById('right-options');
    document.getElementById('subcategory-title').textContent = 'Miscellaneous';
    rightOptions.innerHTML = '';

    const miscOptions = menuData.misc.options;
    miscOptions.forEach((option, index) => {
        const optionElement = createOptionElement(option, 'misc', index);
        rightOptions.appendChild(optionElement);
    });
}

// Créer un élément d'option
function createOptionElement(option, category, index) {
    const div = document.createElement('div');
    
    if (option.type === 'section') {
        div.className = 'section-header';
        div.textContent = option.label;
        return div;
    }

    div.className = 'option-item';

    const label = document.createElement('span');
    label.className = 'option-label';
    label.textContent = option.label;
    div.appendChild(label);

    const control = document.createElement('div');
    control.className = 'option-control';

    switch (option.type) {
        case 'toggle':
            const toggle = createToggle(option, category, index);
            control.appendChild(toggle);
            break;

        case 'slider':
            const slider = createSlider(option, category, index);
            control.appendChild(slider);
            break;

        case 'dropdown':
            const dropdown = createDropdown(option, category, index);
            control.appendChild(dropdown);
            break;

        case 'action':
            // Les actions peuvent naviguer vers une sous-catégorie
            div.style.cursor = 'pointer';
            div.addEventListener('click', () => {
                if (option.category) {
                    // Charger la sous-catégorie dans le panneau de droite
                    loadSubCategory(option.category);
                } else {
                    console.log(`Action: ${option.label}`);
                    div.classList.add('active');
                    setTimeout(() => div.classList.remove('active'), 200);
                }
            });
            break;
    }

    div.appendChild(control);
    return div;
}

// Charger une sous-catégorie dans le panneau de droite
function loadSubCategory(categoryKey) {
    const data = menuData[categoryKey];
    if (!data) return;

    document.getElementById('subcategory-title').textContent = data.title;
    const rightOptions = document.getElementById('right-options');
    rightOptions.innerHTML = '';

    data.options.forEach((option, index) => {
        const optionElement = createOptionElement(option, categoryKey, index);
        rightOptions.appendChild(optionElement);
    });
}

// Créer un toggle switch
function createToggle(option, category, index) {
    const toggle = document.createElement('div');
    toggle.className = 'toggle-switch';
    if (option.value) toggle.classList.add('active');

    const key = `${category}_${index}`;
    activeOptions[key] = option.value;

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggle.classList.toggle('active');
        activeOptions[key] = toggle.classList.contains('active');
        console.log(`${option.label}: ${activeOptions[key]}`);
    });

    return toggle;
}

// Créer un slider
function createSlider(option, category, index) {
    const container = document.createElement('div');
    container.className = 'slider-container';

    const slider = document.createElement('div');
    slider.className = 'slider';

    const fill = document.createElement('div');
    fill.className = 'slider-fill';

    const thumb = document.createElement('div');
    thumb.className = 'slider-thumb';

    const valueDisplay = document.createElement('span');
    valueDisplay.className = 'slider-value';

    const min = option.min || 0;
    const max = option.max || 100;
    const step = option.step || 1;
    let value = option.value || min;

    const updateSlider = (newValue) => {
        value = Math.round(newValue / step) * step;
        value = Math.max(min, Math.min(max, value));
        const percent = ((value - min) / (max - min)) * 100;
        fill.style.width = percent + '%';
        valueDisplay.textContent = value.toFixed(step < 1 ? 1 : 0);
    };

    updateSlider(value);

    let isDragging = false;

    const handleMove = (e) => {
        if (!isDragging) return;
        const rect = slider.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const percent = Math.max(0, Math.min(1, x / rect.width));
        const newValue = min + (max - min) * percent;
        updateSlider(newValue);
    };

    const stopDrag = () => {
        isDragging = false;
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', stopDrag);
    };

    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        handleMove(e);
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', stopDrag);
    });

    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        handleMove(e);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', stopDrag);
    });

    fill.appendChild(thumb);
    slider.appendChild(fill);
    container.appendChild(slider);
    container.appendChild(valueDisplay);

    return container;
}

// Créer un dropdown
function createDropdown(option, category, index) {
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';

    const selected = document.createElement('div');
    selected.className = 'dropdown-selected';
    selected.textContent = option.values[option.selected || 0];

    selected.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
        
        // Cycle through values
        const currentIndex = option.values.indexOf(selected.textContent);
        const nextIndex = (currentIndex + 1) % option.values.length;
        selected.textContent = option.values[nextIndex];
        console.log(`${option.label}: ${selected.textContent}`);
    });

    dropdown.appendChild(selected);
    return dropdown;
}

// Gérer les clics en dehors des dropdowns
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(dd => {
        dd.classList.remove('open');
    });
});