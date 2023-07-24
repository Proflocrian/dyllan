// Custom JavaScript for the theme switch
$(function () {
    const themeSwitch = document.getElementById('themeSwitch');
    themeSwitch.addEventListener('change', function () {
        if (this.checked) {
            updateCssVariables('dark');
        } else {
            updateCssVariables('light');
        }
    });
    // Check the local storage to determine the initial theme (light/dark)
    if (localStorage.getItem('theme') === 'dark') {
        themeSwitch.checked = true;
        updateCssVariables('dark');
    }
});

function updateCssVariables(theme) {
    const root = document.documentElement;
    const white = '#FFFFFF';
    const black = '#000000';

    // Light theme
    const primary_text_colour_light_theme = '#303192';
    const secondary_text_colour_light_theme = black;
    const bg_colour_light_theme = white;
    const btn_bg_colour_light_theme = primary_text_colour_light_theme;
    const link_colour_light_theme = '#0000FF';
    // Dark theme
    const primary_text_colour_dark_theme = white;
    const secondary_text_colour_dark_theme = '#D0D0F0';
    const bg_colour_dark_theme = '#0F0F2E';
    const link_colour_dark_theme = '#94C9FF';

    if (theme === 'light') {
        root.style.setProperty('--primary-text-colour', primary_text_colour_light_theme);
        root.style.setProperty('--secondary-text-colour', secondary_text_colour_light_theme);
        root.style.setProperty('--bg-colour', bg_colour_light_theme);
        root.style.setProperty('--btn-bg-colour', btn_bg_colour_light_theme);
        root.style.setProperty('--link-colour', link_colour_light_theme);
        root.style.setProperty('--resume-wrapper-radius', '0px');
    } else {
        root.style.setProperty('--primary-text-colour', primary_text_colour_dark_theme);
        root.style.setProperty('--secondary-text-colour', secondary_text_colour_dark_theme);
        root.style.setProperty('--bg-colour', bg_colour_dark_theme);
        root.style.setProperty('--btn-bg-colour', btn_bg_colour_light_theme);
        root.style.setProperty('--link-colour', link_colour_dark_theme);
        root.style.setProperty('--resume-wrapper-radius', '1px');
    }
}
