document.addEventListener("DOMContentLoaded", () => {

    const reset = document.getElementById('reset')
    reset.onclick = () => { update(reset.dataset.total) }

    const  pizza = document.getElementById('pizza')
    pizza.onclick = () => { update(pizza.dataset.pizza) }

    const pho = document.getElementById('pho')
    pho.onclick = () => { update(pho.dataset.pho) }

    const ramen = document.getElementById('ramen')
    ramen.onclick = () => { update(ramen.dataset.ramen) }

    const avacado = document.getElementById('avacado')
    avacado.onclick = () => { update(avacado.dataset.avacado) }

    const fries = document.getElementById('fries')
    fries.onclick = () => { update(fries.dataset.fries) }

    const beer = document.getElementById('beer')
    beer.onclick = () => { update(beer.dataset.beer) }

    const icecream = document.getElementById('ice-cream')
    icecream.onclick = () => { update(icecream.dataset.icecream) }

    const cookie = document.getElementById('cookie')
    cookie.onclick = () => { update(cookie.dataset.cookie) }

    function update(fude) {

        d3.json("lib/fudes.json", function (data) {
            debugger
            const parseDate = d3.timeParse("%b %d, %Y");
            const formatDate = d3.timeFormat('%b-%d')

            data.forEach(function (d) {
                d.Week = formatDate(parseDate(d.Week));
            });

            x.domain(data.map(function (d) { return d.Week; }))
            xAxis.transition()
                .duration(1000)
                .call(d3.axisBottom(x))
                .attr("transform", "translate(-0.2," + height + ")")
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end")
                .attr('x', -8)


            const maxY = d3.max(data, function (d) {
                debugger
                return +d[fude].split(',').join('')
            })

            y.domain([0, maxY]);
            yAxis.transition()
                .duration(1000)
                .call(d3.axisLeft(y))


            const line = svg.selectAll(".Line")
                .data(data)

            line.enter()
                .append("line")
                .attr("class", "Line")
                .merge(line)
                .transition()
                .duration(1000)
                .attr("x1", function (d) { return x(d.Week); })
                .attr("x2", function (d) { return x(d.Week); })
                .attr("y1", y(0))
                .attr("y2", function (d) { return y(d[fude].split(',').join('')); })
                .attr('opacity', 0.5)
                .attr("color", "red")

            const circle = svg.selectAll("circle")
                .data(data)

            circle.enter()
                .append("circle")
                .merge(circle)
                .transition()
                .duration(1000)
                .attr("cx", function (d) { return x(d.Week) })
                .attr("cy", function (d) { return y(d[fude].split(',').join('')) })
                .attr("r", 6)
                .attr("fill", "darksalmon")

            svg.selectAll("circle")
                .on("mouseover", handleMouseOver)
                .on("mouseout", handleMouseOut)

            function handleMouseOver(d, i) {
                svg.append('text')
                    .attr('class', 'hoverVaule')
                    .attr("x", x(d.Week) - 20)
                    .attr('y', y(d[fude].split(',').join('')) - 18)
                    .text(d[fude])
                    .attr('font-size', 200)

                d3.select(this)
                    .attr('fill', "darkcyan")
                    .attr('r', 10)

            }

            function handleMouseOut(d, i) {
                d3.select('.hoverVaule').remove();
                d3.select(this)
                    .attr('fill', "darksalmon")
                    .attr('r', 6)

            }


            svg.append('text')
                .attr('class', 'source')
                .attr('x', width - 150)
                .attr('y', height + 100)
                .attr('text-anchor', 'start')
                .text('Source: Hass Avocado Board, 2019')

        })

    }


update('Total')

});
