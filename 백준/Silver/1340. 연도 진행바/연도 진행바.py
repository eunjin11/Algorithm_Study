month, day, year, time = map(str, input().split())
day = int(day[:-1])
year = int(year)
h, m = map(int, time.split(':'))

month_list= ["January" , "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"]
day_list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

isLeapYear = year%400==0 or (year%4==0 and year%100 != 0)
if isLeapYear:
    day_list[1]+=1

total_time = sum(day_list) * 24 * 60

current_month_idx=0
for i in range(12):
    if month_list[i]==month:
        current_month_idx=i
        break

current_time = (sum(day_list[:current_month_idx])+ day-1) * 24 * 60+ h * 60 + m

print(current_time/total_time * 100)