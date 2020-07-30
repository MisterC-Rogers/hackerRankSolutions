# Closure is a function/method that:

# ► Can be passed around like an object.

# It can be treated like a variable, which can be assigned to another variable, passed as an argument to a method.
# ► Remembers the value of variables no longer in scope.

# It remembers the values of all the variables that were in scope when the function was defined. It is then able to access those variables when it is called even if they are in a different scope.
# Example:

# def plus_1(y)
#    x = 100
#    y.call       #remembers the value of x = 1
# end

# x = 1
# y = -> { x + 1 }
# puts plus_1(y)  #2
# In this example, the variable (x), which is closed within the lambda (y), remembers its values. Here, (x) remembers its value as (1).

# Blocks, Procs and Lambdas are closures in Ruby.

# Task

# You are given a partially complete code. Your task is to fill in the blanks (______).

#  block_message_printer prints the message if the block exists.
#  proc_message_printer prints the message inside a Proc.
#  lambda_message_printer prints the message inside a Lambda.

def block_message_printer
    message = "Welcome to Block Message Printer"
    if block_given?
        yield
    end
  puts "But in this function/method message is :: #{message}"
end

message = gets
block_message_printer { puts "This message remembers message :: #{message}" }

#####################################################################################

def proc_message_printer(my_proc)
    message = "Welcome to Proc Message Printer"
    my_proc.()
    puts "But in this function/method message is :: #{message}"
end


my_proc = proc { puts "This message remembers message :: #{message}" }
proc_message_printer(my_proc)
    
######################################################################################    
    
def lambda_message_printer(my_lambda)
    message = "Welcome to Lambda Message Printer"
    my_lambda.call
    puts "But in this function/method message is :: #{message}"
end

my_lambda = -> { puts "This message remembers message :: #{message}" }
lambda_message_printer(my_lambda)    
    
###################################################################################### 