$(document).ready(function() {

    /* validação contato */

    $('#telefone').mask('+00 (00) 00000-0000')

    $('#nome').mask('Z', {
        translation: {
            'Z': { pattern: /[A-Za-zÀ-ÖØ-öø-ÿ ]/, recursive: true }
        }
    });
})