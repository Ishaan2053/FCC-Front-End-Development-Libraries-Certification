import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

type Props = {}

// function insert(num) {
//     document.form1.textview.value = document.form1.textview.value + num;
// }

// function equal() {
//     var exp = document.form1.textview.value;
//     if (exp) {
//         document.form1.textview.value = eval(exp)
//     }
// }

// function backspace() {
//     var exp = document.form1.textview.value;
//     document.form1.textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
// }

export default function Calculator({}: Props) {
  return (
    
    <div>
      <Header />
      <h1 className='block pt-5 text-center bg-gray-800 font-medium text-yellow-300'>A simple JavaScript Calculator</h1>
     <div className="bg-gray-800 p-20 pt-10 max-w-screen max-h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-2 border-yellow-300">
        
        <div className="w-auto m-4 border-gray-600 border-2 bg-gray-800 h-28 text-right space-y-2 py-2">
          <div className="text-gray-700">Operations</div>
          <div className="text-black font-bold text-3xl">Result</div>
        </div>
        <div className="w-auto m-1 h-auto mb-5">
          <div className="m-2 flex justify-between">
            <button className="bg-yellow-100 transition hover:bg-yellow-300 hover:text-black shadow-md rounded-2xl w-12 h-12 text-yellow-600 font-medium flex justify-center items-center">C</button>
            <button className="bg-gray-200 transition hover:bg-gray-400 hover:text-white shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">(</button>
            <button className="bg-gray-200 transition hover:bg-gray-400 hover:text-white shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">)</button>
            <button className="bg-yellow-500 transition hover:bg-yellow-600 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">/</button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="bg-gray-200 transition hover:bg-gray-400 hover:text-white shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">7</button>
            <button className="bg-gray-200 transition hover:bg-gray-400 hover:text-white shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">8</button>
            <button className="bg-gray-200 transition hover:bg-gray-400 hover:text-white shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">9</button>
            <button className="bg-yellow-500 transition hover:bg-yellow-600 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">x</button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="bg-gray-200 transition hover:bg-gray-400 hover:text-white shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">4</button>
            <button className="bg-gray-200 transition hover:bg-gray-400 hover:text-white shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">5</button>
            <button className="bg-gray-200 transition hover:bg-gray-400 hover:text-white shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">6</button>
            <button className="bg-yellow-500 transition hover:bg-yellow-600 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">-</button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="bg-gray-200 transition hover:bg-gray-400 hover:text-white shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">1</button>
            <button className="bg-gray-200 transition hover:bg-gray-400 hover:text-white shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">2</button>
            <button className="bg-gray-200 transition hover:bg-gray-400 hover:text-white shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">3</button>
            <button className="bg-yellow-500 transition hover:bg-yellow-600 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">+</button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="bg-gray-200 transition hover:bg-gray-400 hover:text-white shadow-md rounded-2xl w-full h-12 text-black font-medium flex justify-center items-center">0</button>
            <div className="flex w-full ml-3 justify-between">
              <button className="bg-gray-200 transition hover:bg-gray-400 hover:text-white shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">.</button>
              <button className="bg-green-500 transition hover:bg-green-600 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">=</button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}