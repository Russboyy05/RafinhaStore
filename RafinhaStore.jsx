import React, { useState } from "react";
import { motion } from "framer-motion";

const items = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  rarity: ["Comum", "Incomum", "Raro", "Épico", "Lendário"][i % 5],
  price: "Preço a definir",
  image: "https://tr.rbxcdn.com/13fcf216844006ebf7b66b401f79a8a0/420/420/Image/Png",
}));

export default function RafinhaStore() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-300 to-pink-500 p-4 text-white font-sans">
      <header className="text-center py-8">
        <motion.h1
          className="text-5xl font-extrabold drop-shadow-2xl tracking-wide"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🎮 RafinhaStore Roblox
        </motion.h1>
        <p className="text-lg mt-2">A loja mais completa para itens de Steal a Brainrot!</p>
        <motion.img
          src="https://tr.rbxcdn.com/13fcf216844006ebf7b66b401f79a8a0/420/420/Image/Png"
          alt="Roblox Avatar"
          className="mx-auto mt-4 w-24 h-24 rounded-full shadow-lg border-4 border-white"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white text-black rounded-2xl shadow-xl p-4 flex flex-col items-center hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.image} alt={item.name} className="rounded-xl w-32 h-32 object-cover mb-4" />
            <h2 className="text-xl font-bold text-center">{item.name}</h2>
            <p className="text-sm text-pink-600">{item.rarity}</p>
            <p className="mt-2 text-center">💰 {item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-4 bg-pink-600 text-white py-2 px-6 rounded-full hover:bg-pink-700 transition"
            >
              Adicionar
            </button>
          </motion.div>
        ))}
      </main>

      <section className="mt-16 bg-white text-black p-6 max-w-xl mx-auto rounded-xl shadow-xl">
        <h3 className="text-2xl font-bold text-center mb-4">🛒 Carrinho</h3>
        {cart.length === 0 ? (
          <p className="text-center">Nenhum item no carrinho ainda.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="border-b pb-2 flex justify-between">
                <span>{item.name}</span>
                <span className="text-pink-600">{item.price}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">Método de Pagamento:</h4>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Robux', 'MBWay', 'PayPal', 'Cartão'].map((method) => (
              <button
                key={method}
                onClick={() => setPaymentMethod(method)}
                className={`px-4 py-2 rounded-full border ${
                  paymentMethod === method ? "bg-pink-600 text-white" : "bg-white text-black"
                } hover:bg-pink-700 transition`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        {paymentMethod && (
          <div className="mt-6 text-center">
            <p>Pagamento selecionado: <strong>{paymentMethod}</strong></p>
            <button className="mt-4 bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition">
              Finalizar Pedido
            </button>
          </div>
        )}
      </section>

      <section className="mt-20 max-w-2xl mx-auto bg-white text-black p-6 rounded-xl shadow-lg">
        <h4 className="text-xl font-bold mb-2">ℹ️ Como funciona</h4>
        <p>
          Após selecionar os seus itens e escolher o método de pagamento, clique em “Finalizar Pedido”. Entra em contato com a equipe da loja via Roblox ou redes sociais para concluir o pagamento e receber seu item dentro do jogo.
        </p>
      </section>

      <section className="mt-10 max-w-2xl mx-auto bg-white text-black p-6 rounded-xl shadow-lg">
        <h4 className="text-xl font-bold mb-2">📞 Contato</h4>
        <p>Para dúvidas ou suporte, fale com o usuário <strong>@RussBoyy05</strong> no Roblox ou envie mensagem via Discord.</p>
      </section>

      <footer className="mt-20 text-center text-sm text-white/80">
        Entrega manual via Roblox após confirmação de pagamento. © RafinhaStore 2025
      </footer>
    </div>
  );
}
