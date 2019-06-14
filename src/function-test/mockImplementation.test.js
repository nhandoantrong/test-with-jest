const mockImplementation = jest
  .fn(() => 'default')
  .mockImplementationOnce((a,b) => a+b)
  .mockImplementationOnce((a) => a-1);


test("mock implementation",()=>{
    expect(mockImplementation(1,2)).toBe(3);
    expect(mockImplementation(1)).toBe(0);

})