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
    var countMicros = {
        SaturatedFat: 0.0, Sugar: 0.0, Cholesterol: 0.0, Fiber: 0.0,
        Sodium: 0.0, Potassium: 0.0, Calcium: 0.0, Iron: 0.0,
        VitaminA: 0.0, VitaminC: 0.0,
    };

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

        } else if (ele.category === 'Sugar') {
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

        } else if (ele.category === 'Sodium') {
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
            countMicros.Calcium += Number(parseFloat(ele.value).toFixed(1))
            hash.value = ele.value

        } else if (ele.category === 'Vitamin C') {
            countMicros.VitaminC += Number(parseFloat(ele.value).toFixed(1))
            hash.value = ele.value

        } else if (ele.category === 'Vitamin A') {
            countMicros.VitaminA += Number(parseFloat(ele.value).toFixed(1))
            hash.value = ele.value

        } else if (ele.category === 'Iron') {
            countMicros.Iron += Number(parseFloat(ele.value).toFixed(1))
            hash.value = ele.value
        }

        hash.category = ele.category
        return hash
    }));


    const totals = [];
    totalGrams.forEach(ele => totals.push(ele));
    totalPercentage.forEach(ele => totals.push(ele));
    totalMilligrams.forEach(ele => totals.push(ele));

    // totals = [   
    //    0: { category: "Fiber", value: "0.8" }
    //    1: { category: "Saturated Fat", value: "1.585" }
    //    2: { category: "Sugar", value: "4.87" }
    //    3: { category: "Calcium", value: "104" }
    //    4: { category: "Iron", value: "1.6" }
    //    5: { category: "Vitamin A", value: "36" }
    //    6: { category: "Vitamin C", value: "3.6" }
    //    7: { category: "Cholesterol, value: "0.8" }
    //    8: { category: "Potassium", value: "1.585" }
    //    9: { category: "Sodium", value: "4.87" }
    //    ]

    let dailyPercentage = totals.map((ele => {
        let hash = { category: '', value: '' }
        
        if (ele.category === 'Fiber') {
            const fiber = Number(((parseFloat(ele.value) / 28) * 100).toFixed(1))
            hash.value = Math.round(fiber).toString()

        } else if (ele.category === 'Saturated Fat') {
            const satFat = Number(((parseFloat(ele.value) / 20) * 100).toFixed(1))
            hash.value = Math.round(satFat).toString()

        } else if (ele.category === 'Sugar') {
            const sugar = Number(((parseFloat(ele.value) / 50) * 100).toFixed(1))
            hash.value = Math.round(sugar).toString()

        } else if (ele.category === 'Calcium') {
            hash.value = ele.value

        } else if (ele.category === 'Iron') {
            hash.value = ele.value

        } else if (ele.category === 'Vitamin A') {
            hash.value = ele.value

        } else if (ele.category === 'Vitamin C') {
            hash.value = ele.value

        } else if (ele.category === 'Cholesterol') {
            const cholesterol = Number(((parseFloat(ele.value) / 300) * 100).toFixed(1))
            hash.value = Math.round(cholesterol).toString()

        } else if (ele.category === 'Potassium') {
            const potassium = Number(((parseFloat(ele.value) / 4700) * 100).toFixed(1))
            hash.value = Math.round(potassium).toString()

        } else if (ele.category === 'Sodium') {
            const sodium = Number(((parseFloat(ele.value) / 2300) * 100).toFixed(1))
            hash.value = Math.round(sodium).toString()
        }

        hash.category = ele.category
        return hash
    }));
    
    const chartLabels = ['Saturated Fat', 'Sugar', 'Cholesterol', 'Fiber',
        'Sodium', 'Potassium', 'Iron', 'Calcium', 'Vitamin A', 'Vitamin C'];


    //--------------- Bar Chart Configs

    const margin = 100;
    const width = 720 - 2 * margin;
    const height = 520 - 2 * margin;

    const svg = d3.select('#bar-chart')
        .append('svg')
        .attr("width", width)
        .attr("height", height)
        .style('width', 760)
        .style('height', 540);

    const chart = svg.append('g')
        .attr('transform', `translate(${margin}, ${margin})`);


    //--------------- Bar Chart Scales

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

    const makeYLines = () => d3.axisLeft()
        .scale(yScaleLeft);


    //--------------- Bar Chart Labels

    chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

    chart.append('g')
        .attr('transform', `translate(${0}, 0)`)
        .call(d3.axisLeft(yScaleLeft));

    chart.append('g')
        .attr('transform', `translate(${width}, 0)`)
        .call(d3.axisRight(yScaleRight));

    chart.append('g')
        .attr('class', 'grid')
        .call(makeYLines()
            .tickSize(-width, 0, 0)
            .tickFormat('')
        )

    //--------------- Bar Chart Data Bars

    const barGroups = chart.selectAll()
        .data(dailyPercentage)
        .enter()
        .append('g')

    barGroups
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (g) => xScale(g.category))
        .attr('y', (g) => yScaleLeft(g.value))
        .attr('height', (g) => height - yScaleLeft(g.value))
        .attr('width', xScale.bandwidth())
        .on('mouseenter', handleMouseEnter)
        .on('mouseleave', handleMouseLeave)

    function handleMouseEnter(actual, i) {
        d3.selectAll('.value')
            .attr('opacity', 0)

        d3.select(this)
            .transition()
            .duration(300)
            .attr('opacity', 0.6)
            .attr('x', (a) => xScale(a.category) - 5)
            .attr('width', xScale.bandwidth() + 10)

        const y = yScaleLeft(actual.value)

        line = chart.append('line')
            .attr('id', 'limit')
            .attr('x1', 0)
            .attr('y1', y)
            .attr('x2', width)
            .attr('y2', y)

        barGroups.append('text')
            .attr('class', 'divergence')
            .attr('x', (a) => xScale(a.category) + xScale.bandwidth() / 2)
            .attr('y', (a) => yScaleLeft(a.value * 1.01))
            .attr('fill', 'white')
            .attr('text-anchor', 'middle')
            .text((a, idx) => {
                const divergence = (a.value - actual.value).toFixed(1)

                let text = ''
                if (divergence > 0) text += '+'
                text += `${divergence}g`
                    
                return idx !== i ? text : '';
            })
        }
        
    function handleMouseLeave() {
        d3.selectAll('.value')
            .attr('opacity', 1)

        d3.select(this)
            .transition()
            .duration(300)
            .attr('opacity', 1)
            .attr('x', (a) => xScale(a.category))
            .attr('width', xScale.bandwidth())

        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
    }
    
    // -- Labels
    barGroups
        .append('text')
        .attr('class', 'value')
        .attr('x', (a) => xScale(a.category) + xScale.bandwidth() / 1.95)
        .attr('y', yScaleLeft(3))
        .attr('text-anchor', 'middle')
        .text((a) => `${a.value}%`)

    svg.append('text')
        .attr('class', 'label-grams')
        .attr('x', -(height / 2) - margin)
        .attr('y', margin / 2.4)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .style('fill', 'blue')
        .text('daily percentage')
        .attr("font-family", "SmoothStone");

    svg.append('text')
        .attr('class', 'micro-categories')
        .attr('x', width / 2 + margin)
        .attr('y', 480)
        .attr('text-anchor', 'middle')
        .text('Categories')
        .attr("font-family", "SmoothStone");

    svg.append('text')
        .attr('class', 'micro-title')
        .attr('x', width / 2 + margin)
        .attr('y', 45)
        .attr('text-anchor', 'middle')
        .text('Total Micronutrients')
        .attr("font-family", "SmoothStone");

});