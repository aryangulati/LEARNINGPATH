using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstCsharpProject
{
    class SimpleAddition
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter First value");
            int a = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter Second Value");
            int b = Convert.ToInt32(Console.ReadLine());


            Console.WriteLine($"The Sum of {a} and {b} is {a + b}");

            Console.ReadKey();
        }
    }
}
