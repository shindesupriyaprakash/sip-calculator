import numpy as np

# Parameters (converting input values to floats for decimal precision)
monthly_investment = float(input("Enter a monthly investment: "))
years = float(input("Enter the number of years: "))
expected_return_rate = float(input("Enter the expected return rate (annual): "))
inflation_rate = float(input("Enter the inflation rate (annual): "))

# Convert annual rates to monthly rates
monthly_return_rate = (expected_return_rate / 100) / 12
monthly_inflation_rate = (inflation_rate / 100) / 12

# Total number of months
total_months = int(years * 12)

# Future Value calculation
total_value = monthly_investment * (((1 + monthly_return_rate) ** total_months - 1) / monthly_return_rate) * (1 + monthly_return_rate)

# Invested Value
invested_value = monthly_investment * total_months

# Total value
est_value = total_value - invested_value

print(f"Invested Amount: ₹{invested_value:.2f}")
print(f"Est. Returns: ₹{est_value:.2f}")
print(f"Total Value: ₹{total_value:.2f}")
