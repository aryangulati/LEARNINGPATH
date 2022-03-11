using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstCsharpProject
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.BackgroundColor = ConsoleColor.Cyan;
            Console.Clear();
            Console.ForegroundColor = ConsoleColor.DarkBlue;
            int a = 9;
            Console.WriteLine("Hello World!");
            Console.Write(a);
            Console.WriteLine(a + 2);
            Console.WriteLine("Enter FirstName :");
            string fname = Console.ReadLine();
            Console.WriteLine("Enter Last Name: ");
            string lname = Console.ReadLine();

            Console.WriteLine(fname + " " + lname);
            Console.WriteLine("{0} {1}", fname, lname);
            Console.WriteLine($"{fname} {lname}");

            Console.ReadKey();
            //or you can use cntrl +F5
        }
    }
}
