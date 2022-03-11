using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProgFundamentals1             //DO NOT CHANGE the name of namespace
{
    public class Program                //DO NOT CHANGE the name of class 'Program'
    { 
        public static void Main(string[] args)        //DO NOT CHANGE 'Main' Signature
        {
            //Fill the code here
            Console.WriteLine("Enter your name : ");
            string name = Console.ReadLine();
            Console.Write("Enter your age : ");
            string age = Console.ReadLine();
            Console.WriteLine("Enter your country : ");
            string country = Console.ReadLine();
            Console.WriteLine("Welcome "+name+".Your age is"+age+" and you are from "+country);
            
            Console.WriteLine("Enter a Number");
            double n = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Square of " + n + " is " + FindSquare(n));
            Console.WriteLine("Cube of " + n + " is " + FindCube(n));


            
            
        }

        public static double FindSquare(double num){
            return (num*num);
        }
        public static double FindCube(double num){
            return (num*num*num);
        }
    }
}
