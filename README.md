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


## Implementation Timeline

```bash
1. Monday - Setup framework for API and 3Djs 
2. Tuesday - Integrate API and 3Djs
3. Wednesday - Test API and 3Djs
4. Thursday - Scss
5. Friday - Scss 
```

## (Bonus Features)

TBD