describe("schedule", function(){
  describe("cost function", function(){
    // it('should add 3 to the cost variable',function(){
    //   expect(costUp()).toBe(3)
    // });
    it('should add the cost property from Monday training day to the cost variable',function(){
      expect(costUp(5,0)).toBe(5)
    })
  })
  describe("remove cost function", function(){
    it('should minus the cost property from the cost variable',function(){
      expect(costDown(10,3)).toBe(7);
    });
    it('should not allow the cost to go below zero', function(){
      spyOn(window,"alert");
      expect(costDown(1,10))
      expect(window.alert).toHaveBeenCalledWith("You have already deselected this session")
    })
  })
});
