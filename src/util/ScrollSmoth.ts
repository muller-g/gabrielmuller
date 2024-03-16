export function scrollToSection(sectionId: string) {
    let section = document.querySelector(`${sectionId}`);
    if (section) {
        const rect = section.getBoundingClientRect();
        const offset = window.pageYOffset + rect.top - 60;
        document.querySelector<HTMLElement | any>('.header .header-wrapper ul').classList.remove('show-mob');
        window.scrollTo({
            top: offset,
            behavior: 'smooth' // Rolagem suave
        });
    }
}
