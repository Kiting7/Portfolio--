// skills.js

const skillData = {
    html: {
        title: "HTML",
        text: "Langage de balisage qui définit la structure et le contenu d’une page web. Utilisé pour organiser titres, paragraphes, formulaires, médias et améliorer le SEO grâce à une sémantique claire."
    },
    css: {
        title: "CSS",
        text: "Langage de style permettant de contrôler l’apparence d’un site : couleurs, typographies, layout responsive, animations et effets visuels modernes."
    },
    javascript: {
        title: "JavaScript",
        text: "Langage de programmation utilisé pour rendre les interfaces interactives, manipuler le DOM, consommer des APIs et créer des expériences web dynamiques."
    },
    react: {
        title: "React.js",
        text: "Bibliothèque JavaScript orientée composants pour construire des interfaces modernes, réactives et maintenables, avec gestion d’état et écosystème riche."
    },
    bootstrap: {
        title: "Bootstrap",
        text: "Framework CSS qui accélère la création d’interfaces responsives grâce à une grille, des composants prêts à l’emploi et des utilitaires."
    },
    node: {
        title: "Node.js",
        text: "Environnement d’exécution JavaScript côté serveur permettant de créer des APIs, backends légers et applications temps réel."
    },
    php: {
        title: "PHP",
        text: "Langage côté serveur utilisé pour générer des pages dynamiques, gérer des formulaires et interagir avec des bases de données."
    },
    python: {
        title: "Python",
        text: "Langage polyvalent utilisé pour le scripting, l’automatisation, la data, le backend web et le prototypage rapide."
    },
    mysql: {
        title: "MySQL",
        text: "Système de gestion de base de données relationnelle utilisé pour stocker, interroger et sécuriser des données applicatives."
    },
    git: {
        title: "Git",
        text: "Système de contrôle de version distribué permettant de suivre l’historique du code, collaborer et gérer des branches propres."
    },
    linux: {
        title: "Linux",
        text: "Système d’exploitation open source très utilisé pour les serveurs, le développement et les environnements de production."
    },
    figma: {
        title: "Figma",
        text: "Outil de design collaboratif pour créer des maquettes UI/UX, des prototypes interactifs et des systèmes de design."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const badges = document.querySelectorAll(".skill-badge");
    const titleEl = document.getElementById("skill-title");
    const descEl = document.getElementById("skill-description");

    badges.forEach((badge) => {
        badge.addEventListener("click", () => {
            // visuel actif
            badges.forEach(b => b.classList.remove("active"));
            badge.classList.add("active");

            const key = badge.dataset.skill;
            const skill = skillData[key];

            if (skill) {
                titleEl.textContent = skill.title;
                descEl.textContent = skill.text;
            }
        });
    });
});
