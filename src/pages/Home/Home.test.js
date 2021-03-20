import getVideoList from '../../mock/mockedData';

describe('Video list', () =>{
    test('Should return an array', () =>{
        expect(Array.isArray(getVideoList())).toBe(true);
    });

    test('Should return an array with lenght 25', () =>{
        expect(getVideoList().length).toEqual(25);
    });
});