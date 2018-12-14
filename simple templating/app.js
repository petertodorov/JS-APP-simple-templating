function startApp() {
    const hostHTML = $('#main');
    $('button').click(getTemplate)

    async function getTemplate() {
        let input = {
            name: $('#insertName').val(),
            email: $('#insertEmail').val(),
            phone: $('#insertPhone').val()
        }
        let template = await $.get('greeting.html');
        let inputToInsert = function (template, input) {
            return template.replace(/{{(\s*\w+\s*)}}/g, (match, group1) => {
                if (input[group1]) {
                    return input[group1]
                } else {
                    return match;
                }
            })
        }
        hostHTML.html(inputToInsert(template, input));
    }
}