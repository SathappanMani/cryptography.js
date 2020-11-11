const assert=require('assert');
const AffineCipher=require('../src/Cipher/AffineCipher');

describe("Atbash Cipher Test", () => {
    it("Text with spaces", () => {
        assert.strictEqual(AffineCipher("HELLO WORLD",5,3),"SVOOL DLIOW");
    });
    it("Text with different cases", () => {
        assert.strictEqual(AffineCipher("Hello World",5,3),"SVOOL DLIOW");
    });
    it("Text with same cases without spaces", () => {
        assert.strictEqual(AffineCipher("IAMPLAINTEXT",6,2),"RZNKOZRMGVCG");
    });
    it("Text with lowercase cases without spaces", () => {
        assert.strictEqual(AffineCipher("iamplaintext",6,2),"RZNKOZRMGVCG");
    });    
})