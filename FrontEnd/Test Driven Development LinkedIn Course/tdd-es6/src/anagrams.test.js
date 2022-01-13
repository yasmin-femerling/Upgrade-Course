import {areAnagram} from './anagram';
import {expect} from 'chai';


describe('areAnagrma - basic functionality', () => {
    it('return true when passed two empty strings', () =>{
        const expected = true;
        const actual = areAnagram('','');
        expect(actual).to.deep.equal(expected);
    }) ;

    it('return true when passed two string with the same letters, one of each', () =>{
        const expected = true;
        const actual = areAnagram('listen','silent');
        expect(actual).to.deep.equal(expected);
    }) ;

    it('return false when passed two string with the different letters, one of each', () =>{
        const expected = false;
        const actual = areAnagram('alf','neo');
        expect(actual).to.deep.equal(expected);
    }) ;

    it('return false when passed two string with one of them having an additional different letter', () =>{
        const expected = false;
        const actual = areAnagram('elbows','below');
        expect(actual).to.deep.equal(expected);
    }) ;

    it('return false when passed two strings have the same letters but in different quantities', () =>{
        const expected = false;
        const actual = areAnagram('listens','silent');
        expect(actual).to.deep.equal(expected);
    }) ;

    it('return true when passed two strings have the same letters but with spaces', () =>{
        const expected = true;
        const actual = areAnagram('conversation','voices rant on');
        expect(actual).to.deep.equal(expected);
    }) ;

    it('return true when passed two strings have the same letters but one has uppercase', () =>{
        const expected = true;
        const actual = areAnagram('taste','STATE');
        expect(actual).to.deep.equal(expected);
    }) ;
})