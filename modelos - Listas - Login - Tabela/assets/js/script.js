let email = 'cinthya.artesg@gmail.com';

email = 'cinthyasylva@hotamil.com';

console.log(email);
console.log('O seu e-mail é: ' + email);
console.log(`O seu e-mail é: ${email}` );


document.getElementById('btn-submit').addEventListener('click',e =>{

    console.log('O Botão foi clicado!');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('O mouse está sobre o fomulário.');

});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('O mouse está fora do formulário.');

});


document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault(); //cancela comportamento padrão
    
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    console.log(email,password);

    let json = { //anotação de um objeto
        email,  //a variavel sempre fica no lado direito
        password
    };
    
    if (!json.email) {

        console.error("O campo do e-mail deve ser preenchido!");
    
    } else if (!json.password){

        console.error("O campo do password deve ser preenchido!");

    } else {

        console.info("Dado validados com sucesso!");

    }

});

