# Background && Overview

A webapp that simply tracks daily totals of your calories, macros, and nutritional
facts of your foods. To help user awareness of what they are actually intaking 
on a daily basis by comparing and contrasting food choices, so that the user can 
make more positive food choices for themselves based on their own nutritional 
preferences. Will be able to track 3 meals. 

## Functionality && MVP

In SeeFude.com, users will be able to:

- [ ] Track macros and nutritional facts based their set daily preference
- [ ] Search for foods and it's data through API 
- [ ] See visualizations of daily total intake
- [ ] Compare visualizations by adding and deleting foods to meals 
- [ ] Only track 3 meals: breakfast, lunch, and dinner  

In addition, this project will include:

- [ ] Nutrition Fact "looking" chart tracking daily totals
- [ ] Pie chart tracking specically macros: protein, fats, carbs
- [ ] Dynamic bar graph changing and tracking nutritional data 

## Wireframes && File Structure

[Seefude.com Single Page App](https://wireframe.cc/pro/pp/561395a9f318478#1)

```javascript
Tentative Filestructure 

/dist

/src
  /assets
    images.png

  index.js
  /js
    DemoSelector.js
    Ledger.js
    Graph.js
    [ GraphHeader.js ]
    [ GraphSegment.js ]
    calculations.js
    asyncRequests.js
    D3.js (rendering graph)

/scss
  css

Index.html
.gitignore
node_modules
package.json
package.lock.json
postcss.config.js
README.md
webpack.common.js
webpack.dev.js
webpack.prod.js
```

## Architecture and Technology


[myfitnesspal API](https://www.myfitnesspal.com/api)
- [ ] Interactive D3 pie chart tracking total macros per gram for each category, while also including the comparative percentage from the total intake
- [ ] Interactive D3 bar chart tracking total micronutrients per meal based on FDA approved nutritional labels of each meal. Will be able to see totals of breakfast, lunch, and dinner. 
- [ ] All charts will be adjustable so that the user can compare and see which food choices best fit their nutritional goals. 

## Implementation Timeline

```bash
1. Monday - Setup fatsecret API for food search and data retrieval 
2. Tuesday - Create table to store user select foods per meal 
3. Wednesday - Render D3 pie and bar chart based on data sets of meals
4. Thursday - Scss
5. Friday - Scss 
```

## (Bonus Features)

TBD