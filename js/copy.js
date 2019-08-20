function copy() {
    const list = document.querySelectorAll('.emoji-span-container .emoji');

    [].forEach.call(list, function (element) {
        new Clipboard(element, {
            text: function (trigger) {
                return trigger.innerHTML;
            }
        });
    });

    [].forEach.call(list, function (element) {
        element.addEventListener("click", function(){
            let content = document.getElementById('copy_group').innerHTML;
            content = content.concat(element.innerHTML);
            document.getElementById('copy_group').innerHTML = content;
        
        }, false);
    });
}

const btn = document.getElementById('copy_btn');
new Clipboard(btn, {
    text: function () {
        const content = document.getElementById('copy_group');
        return content.innerHTML;
    }
});
