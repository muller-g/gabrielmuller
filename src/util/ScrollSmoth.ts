export function scrollToSection(sectionId: string) {
    let section = document.querySelector(`${sectionId}`);
    if (section) {
        const rect = section.getBoundingClientRect();
        const offset = window.pageYOffset + rect.top - 60;

        window.scrollTo({
            top: offset,
            behavior: 'smooth' // Rolagem suave
        });
    }
}
