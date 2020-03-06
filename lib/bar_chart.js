document.addEventListener("DOMContentLoaded", () => {

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
                    "vitamin_a": "4",
                    "vitamin_c": "4"
                }
            }
        }
    };

    // d3.tsv("data.tsv", type, function (error, data) {
    //     if (error) throw error;


    //--------------------------- Nutrition Data
    const nutritionalInfo = foodData.food.servings.serving;
    const grams = ['saturated_fat', 'fiber', 'sugar']
    const milligrams = ['cholesterol', 'sodium', 'potassium']
    const percentage = ['vitamin_a', 'vitamin_c', 'calcium', 'iron']


    //--------------------------- MICRO COUNTER
    var countMicros = { SaturatedFat: 0.0, Sugar: 0.0, Cholesterol: 0.0, Fiber: 0.0, 
                        Sodium: 0.0, Potassium: 0.0, Calcium: 0.0, Iron: 0.0, 
                        VitaminA: 0.0, VitaminC: 0.0, };

    //--------------------------- Grams Formatter
    let gramsHash = Object.keys(nutritionalInfo)
        .filter(key => grams.includes(key))
        .reduce((obj, key) => {
            obj[key] = nutritionalInfo[key]
            return obj
        }, {});

    let gramsData = Object.entries(gramsHash)
        .map((ele => {
            let hash = { category: '', value: '' };

            if (ele[0] === 'saturated_fat') {
                hash.category = ele[0].charAt(0).toUpperCase() + ele[0].slice(1, 9) + ' ' 
                                + ele[0].charAt(10).toUpperCase() + ele[0].slice(11) 
            } else {
                hash.category = ele[0].charAt(0).toUpperCase() + ele[0].slice(1)
            }

            hash.value = ele[1]
            return hash
        }));

    // gramsData = [
    //    0: { category: "Fiber", value: "0.8" }
    //    1: { category: "Saturated Fat", value: "1.585" }
    //    2: { category: "Sugar", value: "4.87" }
    //    ]

    let totalGrams = gramsData.map((ele => {
        let hash = { category: '', value: '' }

        if (ele.category === 'Fiber') {
            countMicros.Fiber += Number(parseFloat(ele.value).toFixed(1))
            hash.value = countMicros.Fiber.toString()

        } else if (ele.category === 'Saturated Fat') {
            countMicros.SaturatedFat += Number(parseFloat(ele.value).toFixed(1))
            hash.value = countMicros.SaturatedFat.toString()
            
        } else {
            (ele.category === 'Sugar')
            countMicros.Sugar += Number(parseFloat(ele.value).toFixed(1))
            hash.value = countMicros.Sugar.toString()
        }

        hash.category = ele.category
        return hash
    }));


    //--------------------------- Milligrams Formatter
    let milligramsHash = Object.keys(nutritionalInfo)
        .filter(key => milligrams.includes(key))
        .reduce((obj, key) => {
            obj[key] = nutritionalInfo[key]
            return obj
        }, {});

    let milligramsData = Object.entries(milligramsHash)
        .map((ele => {
            let hash = { category: '', value: '' };

                hash.category = ele[0].charAt(0).toUpperCase() + ele[0].slice(1)
                hash.value = ele[1]
            return hash
        }));
        
    // milligramsData = [
    //    0: { category: "Cholesterol, value: "0.8" }
    //    1: { category: "Potassium", value: "1.585" }
    //    2: { category: "Sodium", value: "4.87" }
    //    ]

    let totalMilligrams = milligramsData.map((ele => {
        let hash = { category: '', value: '' }

        if (ele.category === 'Cholesterol') {
            countMicros.Cholesterol += Number(parseFloat(ele.value).toFixed(1))
            hash.value = countMicros.Cholesterol.toString()

        } else if (ele.category === 'Potassium') {
            countMicros.Potassium += Number(parseFloat(ele.value).toFixed(1))
            hash.value = countMicros.Potassium.toString()

        } else {
            (ele.category === 'Sodium')
            countMicros.Sodium += Number(parseFloat(ele.value).toFixed(1))
            hash.value = countMicros.Sodium.toString()
        }

        hash.category = ele.category
        return hash
    }));


    //--------------------------- Percentage Formatter
    let percentageHash = Object.keys(nutritionalInfo)
        .filter(key => percentage.includes(key))
        .reduce((obj, key) => {
            obj[key] = nutritionalInfo[key]
            return obj
        }, {});

    let percentageData = Object.entries(percentageHash)
        .map((ele => {
            let hash = { category: '', value: '' };

            if (ele[0] === 'vitamin_a' || ele[0] === 'vitamin_c') {
                hash.category = ele[0].charAt(0).toUpperCase() + ele[0].slice(1, 7) 
                                + ' ' + ele[0].charAt(8).toUpperCase()
            } else {
                hash.category = ele[0].charAt(0).toUpperCase() + ele[0].slice(1)
            }

            hash.value = ele[1]
            return hash
        }));

    // percentageData = [
    //    0: { category: "Calcium", value: "8" }
    //    1: { category: "Iron", value: "9" }
    //    2: { category: "Vitamin A", value: "4" }
    //    3: { category: "Vitamin C", value: "4" }
    //    ]

    //--------------- Convert from % to mgs & store in countMicros as mgs(Integer)

    let totalPercentage = percentageData.map((ele => {
        let hash = { category: '', value: '' }

        if (ele.category === 'Calcium') {
            const calciumMgs = Number(((parseFloat(ele.value) / 100) * 1300).toFixed(1))
            countMicros.Calcium += calciumMgs
            hash.value = calciumMgs.toString()

        } else if (ele.category === 'Vitamin C') {
            const vitamin_cMgs = Number(((parseFloat(ele.value) / 100) * 90).toFixed(1))
            countMicros.VitaminC += vitamin_cMgs
            hash.value = vitamin_cMgs.toString()

        } else if (ele.category === 'Vitamin A') {
            const vitamin_aMgs = Number(((parseFloat(ele.value) / 100) * 900).toFixed(1))
            countMicros.VitaminA += vitamin_aMgs
            hash.value = vitamin_aMgs.toString()

        } else {
            (ele.category === 'Iron')
            const ironMgs = Number(((parseFloat(ele.value) / 100) * 18.0).toFixed(1))
            countMicros.Iron += ironMgs
            hash.value = ironMgs.toString()
        }

        hash.category = ele.category
        return hash
    }));


    const totals = [];
        totalGrams.forEach(ele => totals.push(ele));
        totalMilligrams.forEach(ele => totals.push(ele));
        totalPercentage.forEach(ele => totals.push(ele));

    //--------------- Bar Chart Configs
    const margin = { top: 100, right: 70, bottom: 50, left: 70 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    const chartLabels = [ 'Saturated Fat', 'Sugar', 'Cholesterol', 'Fiber',
        'Sodium', 'Potassium', 'Iron', 'Calcium', 'Vitamin A', 'Vitamin C' ];

    const svg = d3.select('#bar-chart');

    const chart = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);


    //--------------- Bar Chart Labels (x, y) Scales
    const xScale = d3.scaleBand()
        .domain(chartLabels)
        .range([0, width])
        .padding(0.3)

    const yScaleLeft = d3.scaleLinear()
        .domain([0, 150]).nice()
        .range([height, 0])

    const yScaleRight = d3.scaleLinear()
        .domain([0, 2500]).nice()
        .range([height, 0])
        

    //--------------- Attaching Chart Labels (x, y) Axes
        chart.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));
  
        chart.append('g')
            .attr('transform', `translate(${0}, 0)`)
            .call(d3.axisLeft(yScaleLeft));
    
        chart.append('g')
            .attr('transform', `translate(${width}, 0)`)
            .call(d3.axisRight(yScaleRight));


    //--------------- Attaching Data to Chart Labels (x, y) Axes
    const barGroupGrams = chart.select()
        .data(totals) 
        .enter()
        // .append('g')

    // const barGroupMilligrams = chart.select()
    //     .data(totalMilligrams)
    //     .enter()
    //     // .append('g')

    // const barGroupPercentage = chart.select()
    //     .data(totalPercentage)
    //     .enter()
    // // .append('g')


    barGroupGrams
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (g) => xScale(g.category))
        .attr('y', (g) => yScaleLeft(g.value))
        .attr('height', (g) => height - yScaleLeft(g.value))
        .attr('width', xScale.bandwidth())

    // barGroupMilligrams
    //     .append('rect')
    //     .attr('class', 'bar')
    //     .attr('x', (g) => xScaleMilligrams(g.category))
    //     .attr('y', (g) => yScaleLeft(g.value))
    //     .attr('height', (g) => height - yScaleLeft(g.value))
    //     .attr('width', xScaleMilligrams.bandwidth())

    // barGroupPercentage
    //     .append('rect')
    //     .attr('class', 'bar')
    //     .attr('x', (g) => xScalePercentage(g.category))
    //     .attr('y', (g) => yScaleLeft(g.value))
    //     .attr('height', (g) => height - yScaleLeft(g.value))
    //     .attr('width', xScalePercentage.bandwidth())

    // barGroupsMilligrams
    //     .append('rect')
    //     .attr('class', 'bar')
    //     .attr('x', (g) => xScale(g.category))
    //     .attr('y', (g) => yScaleRight(g.value))
    //     .attr('height', (g) => height - yScaleRight(g.value))
    //     .attr('width', xScale.bandwidth())

    // barGroups
    //     .append('rect')
    //     .attr('class', 'bar')
    //     .attr('x', (g) => xScale(g.category))
    //     .attr('y', (g) => yScaleLeft(g.value))
    //     .attr('height', (g) => height - yScaleLeft(g.value))
    //     .attr('width', xScale.bandwidth())
    //     .on('mouseenter', function (actual, i) {
    //         d3.selectAll('.value')
    //             .attr('opacity', 0)

    // barGroupsMilligrams
    //     .append('rect')
    //     .attr('class', 'bar')
    //     .attr('x', (g) => xScale(g.category))
    //     .attr('y', (g) => yScaleRight(g.value))
    //     .attr('height', (g) => height - yScaleRight(g.value))
    //     .attr('width', xScale.bandwidth())
    //     .on('mouseenter', function (actual, i) {
    //         d3.selectAll('.value')
    //             .attr('opacity', 0)

            // d3.select(this)
            //     .transition()
            //     .duration(300)
            //     .attr('opacity', 0.6)
            //     .attr('x', (a) => xScale(a.category) - 5)
            //     .attr('width', xScale.bandwidth() + 10)

            // const yLeft = yScaleLeft(actual.value)
            // const yRight = yScaleRight(actual.value)

            // line = chart.append('line')
            //     .attr('id', 'limit')
            //     .attr('x1', 0)
            //     .attr('y1', yLeft)
            //     .attr('x2', width)
            //     .attr('y2', yLeft)

            // lineRight = chart.append('line')
            //     .attr('id', 'limit')
            //     .attr('x1', 0)
            //     .attr('y1', yRight)
            //     .attr('x2', width)
            //     .attr('y2', yRight)



            // barGroups.append('text')
            //     .attr('class', 'divergence')
            //     .attr('x', (a) => xScale(a.category) + xScale.bandwidth() / 2)
            //     .attr('y', (a) => yScaleLeft(a.value) + 30)
            //     .attr('fill', 'white')
            //     .attr('text-anchor', 'middle')
            //     .text((a, idx) => {
            //         const divergence = (a.value - actual.value).toFixed(1)

            //         let text = ''
            //         if (divergence > 0) text += '+'
            //         text += `${divergence}%`

            //         return idx !== i ? text : '';
            //     })

            // barGroupsMilligrams.append('text')
            //     .attr('class', 'divergence')
            //     .attr('x', (a) => xScale(a.category) + xScale.bandwidth() / 2)
            //     .attr('y', (a) => yScaleRight(a.value) + 30)
            //     .attr('fill', 'white')
            //     .attr('text-anchor', 'middle')
            //     .text((a, idx) => {
            //         const divergence = (a.value - actual.value).toFixed(1)

            //         let text = ''
            //         if (divergence > 0) text += '+'
            //         text += `${divergence}%`

            //         return idx !== i ? text : '';
            //     })

    barGroupGrams
        .append('text')
        .attr('class', 'value')
        .attr('x', (a) => xScale(a.category) + xScale.bandwidth() / 2)
        .attr('y', (a) => yScaleLeft(a.value) / 2)
        .attr('text-anchor', 'middle')
        .style('fill', 'green')
        // .text((a) => `${a.value}`)

        // ^text is printing on screen? why? I think they're suppose to be on the rect?

    // barGroupMilligrams
    //     .append('text')
    //     .attr('class', 'value')
    //     .attr('x', (a) => xScaleMilligrams(a.category) + xScaleMilligrams.bandwidth() / 2)
    //     .attr('y', (a) => yScaleLeft(a.value) / 2)
    //     .attr('text-anchor', 'middle')
    //     .style('fill', 'green')
    //     .text((a) => `${a.value}`)

    // barGroupPercentage
    //     .append('text')
    //     .attr('class', 'value')
    //     .attr('x', (a) => xScalePercentage(a.category) + xScalePercentage.bandwidth() / 2)
    //     .attr('y', (a) => yScaleLeft(a.value) / 2)
    //     .attr('text-anchor', 'middle')
    //     .style('fill', 'green')
    //     .text((a) => `${a.value}`)

    svg.append('text')
        .attr('class', 'label-grams')
        .attr('x', -(height / 2) - margin.top)
        .attr('y', margin.left / 3)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .style('fill', 'blue')
        .text('grams')

    svg.append('text')
        .attr('class', 'label-milligrams')
        .attr('x', (height / 2) + margin.top)
        .attr('y', -width * 1.20)
        .attr('transform', 'rotate(90)')
        .attr('text-anchor', 'middle')
        .style('fill', 'purple')
        .text('milligrams')

    svg.append('text')
        .attr('class', 'micro-categories')
        .attr('x', width / 2 + margin.bottom * 1.6)
        .attr('y', height + margin.bottom * 3.5)
        .attr('text-anchor', 'middle')
        .text('Categories')

    svg.append('text')
        .attr('class', 'micro-title')
        .attr('x', width / 2 + margin.bottom * 1.6)
        .attr('y', height / 7)
        .attr('text-anchor', 'middle')
        .text('Total Micronutrients')

});