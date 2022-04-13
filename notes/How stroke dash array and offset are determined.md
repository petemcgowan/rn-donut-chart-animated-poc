Note this makes no sense **unless** you think about these two values **TOGETHER**.

## How you calculate dash ARRAY

The array is the percentage size you want to create, as a RATIO. So if it's a 20% chunk you're after, then it would be 20 80. If it's 25, it's 25 75 etc.

---

circumference: 199.80529276831084,

So in OUR NEW case, 200 is the circle circumference.
Because we want to go back 1/4, the 1st seg offset is 49.95

Fill a OUR chart with 25% + 25%
Circ - PSTL + 1stSO = CSO
1st: is just the segment offset aka 49.95 Array=(49.95 149.85)
2nd: 199.8 - 49.85 + 49.85 = 199.8 Array=(49.95 149.85)

The percentage stuff confuses me!
circ - circ _ maxPerc / 100 - offset
200 - (200 _ 150) / 100
-298

The 1 calc(green) starts at 150 and ends at 116

The animation value is gonna increase to 25, and then stop. Is that right? Shouldn't this be 50? Or if animating from zero/12pm, the length to go? So animation 1 has 50 to go, animation 2 has 100 (cause it's twice as long).

So wouldn't it be percentage of circumference?

---

## How you calculate the OFFSET

This is where the start point, which is RELATIVE (to chunks already "put in place")

Circumference
− All preceding segments’ total length

- First segment’s offset
  = Current segment offset

100 − 85 + 25 = 40
Circ - PSTL + 1stSO = CSO

Circumference - all possible segment lengths aka the full circle
1st segment offset = winding back from "3pm to 12pm" aka 25%
All preceding segment's total length = start where u need to, after the other ones

Fill a NEW chart with 40%, 20%, and 30% with 10% unused
Circ - PSTL + 1stSO = CSO
1st one is just the segment offset aka 25 Array=(40 60)
100 - (40) + 25 = 85 Array=(20 80)
100 - (40+20) + 25 = 65 Array=(30 70)
Array=(20 80)

<svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
  <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
  <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" stroke-width="3"></circle>
  <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" stroke-width="3" stroke-dasharray="40 60" stroke-dashoffset="25"></circle>
  <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#b1c94e" stroke-width="3" stroke-dasharray="20 80" stroke-dashoffset="85"></circle>
  <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#377bbc" stroke-width="3" stroke-dasharray="30 70" stroke-dashoffset="65"></circle>
  <!-- unused 10% -->
</svg>

So in OUR case, 251 is the circle circumference.
Because we want to go back 1/4, the 1st seg offset is 62.75

Fill a OUR chart with 25% + 25%, with 10% unused
Circ - PSTL + 1stSO = CSO
1st: is just the segment offset aka 62.75 Array=(62.75 188.25)
2nd: 251 - 62.75 + 62.75 = 251 Array=(62.75 188.25)

OUR 100 based 25/25 donut chart:
<svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
<circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
<circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" stroke-width="3"></circle>
<circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" stroke-width="3" stroke-dasharray="40 60" stroke-dashoffset="25"></circle>
<circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#b1c94e" stroke-width="3" stroke-dasharray="20 80" stroke-dashoffset="85"></circle>
<circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#377bbc" stroke-width="3" stroke-dasharray="30 70" stroke-dashoffset="65"></circle>

  <!-- unused 10% -->
</svg>

Transferring to larger circle:

- If you make radius etc bigger aka **bigger circle**, you need a **bigger viewport**. Everything gets bigger. Of course why bother doing that? Why not just go with a smaller circle closer to the "100 paradigm"?

A good rule of thumb is
View port size for each of x/y = ((radius + stroke width) \* 2)
Both of CX/CY = (radius / 2) (or go for 50%)

TODO: Come back to this, I think I need to mod cx/cy/Viewport?

<svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
  <!-- this is the "donut hole" (no dash) -->
  <circle class="donut-hole" cx="21" cy="21" r="40" fill="#fff"></circle>
  <!-- this is unused gray BACKGROUND (no dash) -->
  <circle class="donut-ring" cx="21" cy="21" r="40" fill="transparent" stroke="#d2d3d4" stroke-width="3"></circle>

  <!-- 1st 25% (25 75 array, 25 offset) -->

<circle class="donut-segment" cx="21" cy="21" r="40" fill="transparent" stroke="#ce4b99" stroke-width="3" stroke-dasharray="63 188" stroke-dashoffset="63"></circle>

  <!-- 2nd 25% (25 75 array, 25 offset) -->

    <circle class="donut-segment" cx="21" cy="21" r="40" fill="transparent" stroke="#b1c94e" stroke-width="3" stroke-dasharray="63 188" stroke-dashoffset="251"></circle>

</svg>
