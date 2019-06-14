const mockReturn = jest.fn();

mockReturn
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue({name:"Nhan"});

test("test mock return value", ()=>{

    expect(mockReturn()).toBe(10);
    expect(mockReturn()).toBe('x');
    expect(mockReturn()).toEqual({name:"Nhan"});

    
})