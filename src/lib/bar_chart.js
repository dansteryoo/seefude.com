document.addEventListener("DOMContentLoaded", () => {

    const chartLabels = ['Saturated Fat', 'Sugar', 'Cholesterol', 'Fiber',
        'Sodium', 'Potassium', 'Iron', 'Calcium', 'Vitamin A', 'Vitamin C'];

    //--------------- Bar Chart Configs

    const margin = 40;
    const width = 640 - 2 * margin;
    const height = 400 - 2 * margin;

    const svg = d3.select('#bar-chart')
        .append('svg')
        .attr("width", width)
        .attr("height", height)
        .style('width', 650)
        .style('height', 520);

    const chart = svg.append('g')
        .attr('transform', `translate(${margin}, ${margin})`);

    //--------------- Bar Chart Scales

    const xScale = d3.scaleBand()
        .domain(chartLabels)
        .range([0, width])
        .padding(0.3)

    const yScaleLeft = d3.scaleLinear()
        .domain([0, 100]).nice()
        .range([height, 0])

    const yScaleRight = d3.scaleLinear()
        .domain([0, 100]).nice()
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

    //--------------- Nutrition Facts

    function updateFacts(fude) {

        d3.json("./src/lib/fudes.json").then(function (data) {
            let foodData = data.filter(ele => ele[fude])

            const nutritionalInfo = foodData[0][fude].servings.serving;
            const grams = ['saturated_fat', 'fiber', 'sugar']
            const milligrams = ['cholesterol', 'sodium', 'potassium']
            const percentage = ['vitamin_a', 'vitamin_c', 'calcium', 'iron']
            debugger
            
        const totalCals = document.getElementById('total-calories')
        const totalFat = document.getElementById('total-fat')
        const totalSatFat = document.getElementById('total-saturated-fat')
        const totalChol = document.getElementById('total-cholesterol')
        const totalSodium = document.getElementById('total-sodium')
        const totalPot = document.getElementById('total-potassium')
        const totalCarbs = document.getElementById('total-carbohydrate')
        const totalFiber = document.getElementById('total-fiber')
        const totalSugar = document.getElementById('total-sugar')
        const totalProtein = document.getElementById('total-protein')
        const totalCalium = document.getElementById('total-calcium')
        const totalIron = document.getElementById('total-iron')
        const totalVA = document.getElementById('total-vitamin-A')
        const totalVC = document.getElementById('total-vitamin-C')

        if (fude !== reset) {

            //--------------- Total Kcals
            totalCals.innerText = (
                Math.ceil((nutritionalInfo.protein * 4) +
                    (nutritionalInfo.fat * 9) +
                    (nutritionalInfo.carbohydrate * 4)) + " kCals"
            )

            //--------------- Total g/mg
            totalFat.innerText = Math.ceil(nutritionalInfo.fat) + "g"
            totalSatFat.innerText = Math.ceil(nutritionalInfo.saturated_fat) + "g"
            totalChol.innerText = Math.ceil(nutritionalInfo.cholesterol) + "mg"
            totalSodium.innerText = Math.ceil(nutritionalInfo.sodium) + "mg"
            totalPot.innerText = Math.ceil(nutritionalInfo.potassium) + "mg"
            totalCarbs.innerText = Math.ceil(nutritionalInfo.carbohydrate) + "g"
            totalFiber.innerText = Math.ceil(nutritionalInfo.fiber) + "g"
            totalSugar.innerText = Math.ceil(nutritionalInfo.sugar) + "g"
            totalProtein.innerText = Math.ceil(nutritionalInfo.protein) + "g"

            //--------------- Total %
            totalCalium.innerText = Math.ceil(nutritionalInfo.calcium) + "%"
            totalIron.innerText = Math.ceil(nutritionalInfo.iron) + "%"
            totalVA.innerText = Math.ceil(nutritionalInfo.vitamin_a) + "%"
            totalVC.innerText = Math.ceil(nutritionalInfo.vitamin_c) + "%"
        } else {
            //--------------- Reset Kcals
            totalCals.innerText = "0 kCals"

            totalFat.innerText = "0g"
            totalSatFat.innerText = "0g"
            totalChol.innerText = "0mg"
            totalSodium.innerText = "0mg"
            totalPot.innerText = "0mg"
            totalCarbs.innerText = "0g"
            totalFiber.innerText = "0g"
            totalSugar.innerText = "0g"
            totalProtein.innerText = "0g"

            totalCalium.innerText = "0%"
            totalIron.innerText = "0%"
            totalVA.innerText = "0%"
            totalVC.innerText = "0%"
        }

    })}
    //--------------- Bar Chart Data Bars

    const reset = document.getElementById('reset')
    reset.onclick = () => { 
        removeBars()
        updateFacts(reset.value)
    };

    const pizza = document.getElementById('pizza')
    pizza.onclick = () => { 
        updateFacts(pizza.value)
        update(pizza.value)
    };

    const pho = document.getElementById('pho')
    pho.onclick = () => { 
        updateFacts(pho.value)
        update(pho.value) 
    };

    const ramen = document.getElementById('ramen')
    ramen.onclick = () => { 
        updateFacts(ramen.value)
        update(ramen.value) 
    };

    const avacado = document.getElementById('avacado')
    avacado.onclick = () => {
        updateFacts(avacado.value) 
        update(avacado.value) 
    };

    const fries = document.getElementById('fries')
    fries.onclick = () => {
        updateFacts(fries.value) 
        update(fries.value) 
    };

    const beer = document.getElementById('beer')
    beer.onclick = () => {
        updateFacts(beer.value) 
        update(beer.value) 
    };

    const icecream = document.getElementById('icecream')
    icecream.onclick = () => {
        updateFacts(icecream.value) 
        update(icecream.value) 
    };

    const cookie = document.getElementById('cookie')
    cookie.onclick = () => {
        updateFacts(cookie.value) 
        update(cookie.value) 
    };

    function removeBars() {
        chart.selectAll('rect').remove()
        chart.selectAll('text.value')
            // .data(dailyPercentage)
            // .attr('class', 'value')
            .remove()
    };

    function update(fude) {

        d3.json("./src/lib/fudes.json").then(function (data) {
            let foodData = data.filter(ele => ele[fude])
            
            const nutritionalInfo = foodData[0][fude].servings.serving;
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
            
            const barGroups = chart.selectAll()
                .data(dailyPercentage)
                .enter()
                .append('g')

            barGroups
                .append('rect')
                .attr('class', 'bar')
                .attr('x', (g) => xScale(g.category))
                .attr('width', xScale.bandwidth())
                .attr('y', (g) => yScaleLeft(0))
                .attr('height', (g) => height - yScaleLeft(0))
                .transition()
                .duration(600)
                .delay(100)
                .attr('y', (g) => yScaleLeft(g.value))
                .attr('height', (g) => height - yScaleLeft(g.value))

            barGroups
                .append('text')
                .attr('class', 'value')
                .attr('x', (a) => xScale(a.category) + xScale.bandwidth() / 1.95)
                .attr('y', yScaleLeft(3))
                .attr('text-anchor', 'middle')
                .text((a) => `${a.value}%`)

        })
    }


    // -- Labels

    svg.append('text')
        .attr('class', 'label-grams')
        .attr('x', width / 2 + margin)
        .attr('y', 40)
        .attr('transform', 'rotate(0)')
        .attr('text-anchor', 'middle')
        .style('fill', 'blue')
        .text('daily %')
        .attr("font-family", "SmoothStone");

    svg.append('text')
        .attr('class', 'micro-categories')
        .attr('x', width / 2 + margin)
        .attr('y', 430)
        .attr('text-anchor', 'middle')
        .text('Categories')
        .attr("font-family", "SmoothStone");

});