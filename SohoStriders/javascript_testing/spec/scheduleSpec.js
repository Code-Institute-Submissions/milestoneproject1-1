describe("schedule", function(){



  describe('toggle activity', function(){
    it('add an id to the array if it does not exist', function(){
      var arr = ["foo"];
      expect(toggleActivity(arr,"bar")).toEqual(["foo","bar"]);
    })
      it('remove the item from the array if id is already in the array', function(){
      var arr = ["foo"];
      expect(toggleActivity(arr,"foo")).toEqual([]);
    })
  });
    describe('schedule creator', function(){
      it('filter the filter of activities to the selected activities', function(){
        var selectedActivities = [0,2,4]
        var schedule = [
          {activityId: 0},
          {activityId: 1},
          {activityId: 2},
          {activityId: 3},
          {activityId: 4},
          ];
        var expectedSchedule = [
          {activityId: 0},
          {activityId: 2},
          {activityId: 4},
        ]
        expect(scheduleCreator(selectedActivities, schedule)).toEqual(expectedSchedule);
      })
    })
    describe('find id in array', function(){
      it('return true if the day is selected', function(){
        var activityId = 2
        var selectedActivities = [0,2,4]
        expect(isActivitySelected(activityId, selectedActivities)).toEqual(true);
      })
      it('return false if the day is not selected', function(){
        var activityId = 3
        var selectedActivities = [0,2,4]
        expect(isActivitySelected(activityId, selectedActivities)).toEqual(false);
      })
    })
});


