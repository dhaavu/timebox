<template>
    <div>
         <div class="slotContainer">
            <div class="interval">
              {{ toHoursAndMinutes(slot.start) }} -
              {{ toHoursAndMinutes(slot.end) }}
            </div>
            <div class="slot">
              <div ref="draggableContainer2" class="timeslot"></div>
              <div class="controls">
                <span class="resize-minus"> - </span>
                <span class="resize-plus"> + </span>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
export default {
    name:'timeslot', 
    data() {
        return {
            start, 
            end, 
            id
        }
    },
}
</script>