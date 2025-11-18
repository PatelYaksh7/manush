"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                     Happy Birthday, My Love 💗
Today is the day the most special person entered this world, and I’m grateful every single moment that our paths crossed. You bring a kind of peace, joy, and magic into my life that I never knew was possible.

You deserve all the happiness, love, and sweet moments this world has to offer. Your smile lights up my entire day, your presence feels like home, and your heart is the safest place I’ve ever known.

I hope today reminds you of how precious you are not just to me, but to everyone lucky enough to know you.
You are my strength, my softness, my happiness… my everything.

Stay with me forever.
In every moment, in every season, in every dream I choose you. Always.

Wishing you endless love, success, peace, and all the beautiful things life can give.
<br />
Forever yours Shamless 💗
                    </p>
                </motion.div>
            </div>
        </div>
    )
}