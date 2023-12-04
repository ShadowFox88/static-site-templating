const TEMPLATES = document.querySelectorAll("template");
const SLOTS = document.querySelectorAll("slot");

for (const template of TEMPLATES) {
    const slots = document.querySelectorAll(`slot[name="${template.id}"]`);

    for (const slot of slots) {
        console.log(slot);
        slot.replaceWith(template.content, );
    }
}
