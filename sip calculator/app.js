const { useState, useEffect } = React;

function InvestmentCalculator() {
    const [monthlyInvestment, setMonthlyInvestment] = useState("");
    const [years, setYears] = useState("");
    const [expectedReturnRate, setExpectedReturnRate] = useState("");
    const [inflationRate, setInflationRate] = useState("");
    const [result, setResult] = useState(null);

    const calculate = () => {
        const monthlyInvestmentFloat = parseFloat(monthlyInvestment);
        const yearsFloat = parseFloat(years);
        const expectedReturnRateFloat = parseFloat(expectedReturnRate);
        const inflationRateFloat = parseFloat(inflationRate);

        const monthlyReturnRate = (expectedReturnRateFloat / 100) / 12;
        const monthlyInflationRate = (inflationRateFloat / 100) / 12;
        const totalMonths = yearsFloat * 12;

        const totalValue = monthlyInvestmentFloat * (((1 + monthlyReturnRate) ** totalMonths - 1) / monthlyReturnRate) * (1 + monthlyReturnRate);
        const investedValue = monthlyInvestmentFloat * totalMonths;
        const estValue = totalValue - investedValue;

        setResult({
            investedValue: investedValue.toFixed(2),
            estValue: estValue.toFixed(2),
            totalValue: totalValue.toFixed(2),
        });

        document.title = `Calculation Result - ₹${totalValue.toFixed(2)}`;
    };

    return (
        <div className="container">
            <h2>SIP Calculator</h2>
            <input
                type="number"
                placeholder="Monthly Investment"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
            />
            <input
                type="number"
                placeholder="Years"
                value={years}
                onChange={(e) => setYears(e.target.value)}
            />
            <input
                type="number"
                placeholder="Expected Return Rate (%)"
                value={expectedReturnRate}
                onChange={(e) => setExpectedReturnRate(e.target.value)}
            />
            <input
                type="number"
                placeholder="Inflation Rate (%)"
                value={inflationRate}
                onChange={(e) => setInflationRate(e.target.value)}
            />
            <button onClick={calculate}>Calculate</button>
            {result && (
                <div className="result">
                    <p>Invested Amount: ₹{result.investedValue}</p>
                    <p>Est. Returns: ₹{result.estValue}</p>
                    <p>Total Value: ₹{result.totalValue}</p>
                </div>
            )}
        </div>
    );
}

ReactDOM.render(<InvestmentCalculator />, document.getElementById('root'));
