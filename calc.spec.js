const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { soma } = require('./calc');

lab.test('retorno da soma de 2 e 3 deve ser 5', (done) => {

    Code.expect(soma(2, 3)).to.equal(5);
    done();
});

lab.test('retorno da soma de -21 e -19 deve ser -40', (done) => {

    Code.expect(soma(-21, -19)).to.equal(-40);
    done();
});

lab.test('A some de 3 e A deve ser 3 = A', (done) => {

    Code.expect(soma(3, A)).to.equal(3=A);
    done();
});


lab.test('O retorno da porcentagem de 24 de 100 deve ser igual a 24', (done) => {

    Code.expect(soma(24, 100)).to.equal(24);
    done();
});


lab.test('o retorno da soma de 1999991 e -78 deve ser 19999913 ', (done) => {

    Code.expect(soma(1999991, 78)).to.equal(1999913);
    done();
});
