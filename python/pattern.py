n = int(input())

for i in range(1,n + 1):
    star = ((i * 2 )- 1) * "* "
    left_spaces = "  " * (n - i)
    if i == 1:
        print(left_spaces + (1 * "*"))
    elif i > 1:
        print(left_spaces + star + left_spaces)




#output :
    # n = 5 
    """
          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
    
    
    """





N = int(input())

for i in range(1,(N + 1)):
    left_dots = ". " * (N - i)
    zeros = "0 " * ((2 * i) - 1)
    print(left_dots + zeros + left_dots)
    
for j  in range(1,N):
    right_dots = ". " * j 
    zeros_lower = "0 " * (((N - j) * 2) - 1)
    print(right_dots + zeros_lower + right_dots)
























