document.addEventListener('DOMContentLoaded', () => {

    let foodData = {
        "food": {
            "food_id": "4384",
            "food_name": "Plain French Toast",
            "food_type": "Generic",
            "food_url": "http:\/\/www.fatsecret.com\/calories-nutrition\/generic\/french-toast-plain",
            "servings": {
                "serving": {
                    "calcium": "8",
                    "calories": "3809",
                    "carbohydrate": "200",
                    "cholesterol": "90",
                    "fat": "65",
                    "fiber": "0.8",
                    "iron": "9",
                    "measurement_description": "regular slice",
                    "metric_serving_amount": "65.000",
                    "metric_serving_unit": "g",
                    "monounsaturated_fat": "2.298",
                    "number_of_units": "1.000",
                    "polyunsaturated_fat": "1.578",
                    "potassium": "80",
                    "protein": "200",
                    "saturated_fat": "1.585",
                    "serving_description": "regular slice",
                    "serving_id": "16758",
                    "serving_url": "http:\/\/www.fatsecret.com\/calories-nutrition\/generic\/french-toast-plain?portionid=16758&portionamount=1.000",
                    "sodium": "320",
                    "sugar": "4.87",
                    "trans_fat": "0",
                    "vitamin_a": "0",
                    "vitamin_c": "0"
                }
            }
        }
    };


    // d3.tsv("data.tsv", type, function (error, data) {
    //     if (error) throw error;


    //--------------------------- Nutrition Data
    const nutritionalInfo = foodData.food.servings.serving;
    const macros = ['protein', 'fat', 'carbohydrate'];
    const cal = ['calories'];


    //--------------------------- MACRO COUNTER
    var countMacros = { Carbs: 0.0, Fats: 0.0, Protein: 0.0, Calories: 0.0 };


    //--------------------------- Macro Formatter
    let macroHash = Object.keys(nutritionalInfo)
                          .filter(key => macros.includes(key))
                          .reduce((obj, key) => { 
                              obj[key] = nutritionalInfo[key]
                              return obj }, {});


    let macroData = Object.entries(macroHash)
                    .map((ele => {
                        let hash = { category: '', value: '' };
                            
                        if (ele[0] === 'carbohydrate') {
                            hash.category = ele[0].charAt(0).toUpperCase() + ele[0].slice(1, 4) + 's'

                        } else if (ele[0] === 'fat') {
                            hash.category = ele[0].charAt(0).toUpperCase() + ele[0].slice(1) + 's'

                        } else {
                            hash.category = ele[0].charAt(0).toUpperCase() + ele[0].slice(1)
                        }
                        
                        hash.value =  ele[1]
                        return hash
                    }));

    // macroData = [
    //    0: { category: "Carbs", value: "20.02" }
    //    1: { category: "Fats", value: "6.13" }
    //    2: { category: "Protein", value: "5.58" }
    //    ]

    let totalMacros = macroData.map((ele => {
                        let hash = { category: '', value: '' }

                        if (ele.category === 'Carbs') {
                            countMacros.Carbs += Number(parseFloat(ele.value).toFixed(1))
                            hash.value = countMacros.Carbs.toString()

                        } else if (ele.category === 'Fats') {
                            countMacros.Fats += Number(parseFloat(ele.value).toFixed(1))
                            hash.value = countMacros.Fats.toString()
                            
                        } else {
                            (ele.category === 'Protein')
                            countMacros.Protein += Number(parseFloat(ele.value).toFixed(1))
                            hash.value = countMacros.Protein.toString()
                        }

                        hash.category = ele.category
                        return hash
                    }));

    
    //--------------------------- Calories Formatter
              
    let calHash = Object.keys(nutritionalInfo)
                          .filter(key => cal.includes(key))
                          .reduce((obj, key) => {
                              obj[key] = nutritionalInfo[key]
                              return obj }, {});

    let calData = Object.entries(calHash)
                        .map((ele => {
                            let hash = { category: '', value: '' };

                            hash.category = ele[0].charAt(0).toUpperCase() + ele[0].slice(1)
                            hash.value = ele[1]
                        return hash
                    }));

    // calData = [
    //    0: { category: 'Calories', value: '159' }
    //    ]

    let totalCals = calData.map((ele => {
        let hash = { category: '', value: '' }

            countMacros.Calories += Math.round(parseFloat(ele.value))
            hash.value = countMacros.Calories.toString()
            hash.category = ele.category
        return hash
    }));


    //--------------------------- Pie Chart Format

    const margin = 30;
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2 - margin;

    
    //--------------------------- Colors Alternatives
    
    // Red = #d7191c
    // Orange = #ffb347
    // Yellow = #fbf1d1
    // Green = #BDECB5
    // Blue = #72c6ed
    // Purple = #6A3169

    //--------------------------- Colors [ blue, green, yellow, pink]
    const color = d3.scaleOrdinal()
        .domain(totalMacros)
        .range(['#72c6ed', '#89f0a9', '#ffb347', '#d7191c']);

    const svg = d3.select("#pie-chart").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')')

    const arc = d3.arc()
        .innerRadius(radius - 80)
        .outerRadius(radius)

    const arcLabel = d3.arc()
        .innerRadius(radius - 50)
        .outerRadius(radius - 30);

    const pie = d3.pie()
        .value(d => d.value)


        


    //--------------------------- Pie Chart Data

    svg.selectAll('pieChart')
        .data(pie(totalMacros))
        .enter()
        .append('path')
        .attr('id', 'pieChart')
        .attr('d', arc)
        .attr('fill', (d => color(d.data.category)))
        .attr('stroke', 'black')
        .style('stroke-width', '1.5px')

    
    svg.selectAll('slice')
        .data(pie(totalMacros))
        .enter()
        .append('text')
        .attr('transform', d => `translate(${arcLabel.centroid(d)})`)
        .text(d => `${d.value}` + ' g')
        .style('text-anchor', 'middle')
        .style('font-size', '28')
        .style('fill', 'black')
        .style('stroke-width', .3)
        .style('opacity', 0.9)

    //--------------------------- Pie Chart Legend

    const legend = svg.selectAll('legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', ((d, i) => {
            const offset = 33 * color.domain().length / 2;
            const horz = -39;
            const vert = i * 33 - offset;
            return 'translate(' + horz + ',' + vert + ')';
        }))
        
    legend.append('rect')
        .data(pie(totalMacros))
        .attr('width', 25)
        .attr('height', 25)
        .attr('fill', (d => color(d.data.category)))
        .style('opacity', 0.9)

    legend.append('text')
        .data(pie(totalMacros))
        .attr('x', 33)
        .attr('y', 17)
        .text(d => d.data.category)
        .style('font-size', '20')


    //--------------------------- Pie Chart Calories 

    const calories = svg.selectAll('calories')
        .data(color)
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', 'translate(-39, 33)')

    calories.append('rect')
        .data(pie(totalCals))
        .attr('width', 25)
        .attr('height', 25)
        .attr('fill', '#89cff0')

    calories.append('text')
        .data(pie(totalCals))
        .attr('x', 33)
        .attr('y', 17)
        .text(d => d.data.category)
        .style('font-size', '20')


    //--------------------------- kCal Text arched

    svg.append('path')
        .attr('id', 'curve')
        .attr('d', 'M10,300 A148,150,0 0,1 380,240')
        .attr('transform', 'translate(-192, -280) rotate(0)')
        .style('fill', 'none')

    svg.append('text')
        .data(totalCals)
        .attr('transform', 'translate(0, -0) rotate(119)')
        .append('textPath')
        .attr('xlink:href', '#curve')
        .text(d => `${d.value}` + ' kCal')
        .style('font-size', '42')
        .style('fill', '#95dbfd')



    //--------------------------- Pie Chart Annimation  



})
