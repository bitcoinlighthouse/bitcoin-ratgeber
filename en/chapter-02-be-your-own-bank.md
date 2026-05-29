# Chapter 2 – Be Your Own Bank

**The most important step: out of dependency**

---

If your Bitcoin sits on an exchange, you don't actually own any Bitcoin. You own an IOU. A number in a database that belongs to someone else. The exchange can be hacked, go bankrupt, freeze your account, or block withdrawals.

> ⚠️ **The Hard Lesson of FTX (2022)**  
> When FTX collapsed, users worldwide lost billions. Not because Bitcoin had a problem – but because they didn't really own any Bitcoin. They held an IOU from FTX. The Bitcoin still existed. They just belonged to someone else.

The good news: moving to your own wallet is easier than you might think. This chapter shows you how it works.

---

## What Is a Seed?

The heart of self-custody is the seed: an ordered list of 12 or 24 words. No password, no email, no PIN. Just words.

From this seed, the wallet software mathematically derives all of your Bitcoin addresses and keys. The seed is everything. Whoever has it, has your Bitcoin. Whoever loses it, loses them forever – no exception, no hotline.

> **How Secure Is the Seed?**  
> The seed uses SHA-256 encryption. The number of possible keys is greater than the number of atoms in the universe. Even all the supercomputers in the world combined cannot guess a random seed in billions of years.

### The Golden Rule: Seed Security

> ⚠️ **Never Store Digitally**  
> No photo, no screenshot, no cloud note, no email, no WhatsApp message. A digital seed is a compromised seed.

- Write the seed down by hand on paper immediately upon setup
- Use a document-grade pen – ballpoint, not pencil
- Keep multiple copies in different secure locations
- Tell no one your seed words – not support, not family, no one
- Check regularly that the paper is still legible
- Test recovery with a small amount before transferring larger sums

---

## Custodial vs. Non-Custodial

There are two fundamental ways to hold Bitcoin:

| Custodial (Exchange / Third Party) | Non-Custodial (Your Own Wallet) |
|---|---|
| You don't have a seed | You hold your own seed – real Bitcoin |
| Third party holds your keys | You hold your keys yourself |
| Exchange can freeze or go bankrupt | No one can take your Bitcoin from you |
| Good for buying – bad for storing | Right for long-term custody |
| Examples: Kraken, Coinbase, Bitpanda | Examples: Aqua Wallet, Sparrow, hardware wallets |

> **NOT YOUR KEYS, NOT YOUR COINS**  
> Whoever does not hold the private keys themselves owns only an IOU – not real Bitcoin. This rule is the most important principle of self-custody.

---

## Wallet Types at a Glance

### Software Wallet (for everyday use)

An app on your smartphone or computer. Connected to the internet – hence also called a "hot wallet." Ideal for smaller amounts that you move regularly.

- **Aqua Wallet** (aqua.net) – simple, ideal for beginners, iOS and Android
- **Sparrow Wallet** (sparrowwallet.com) – desktop, maximum control, open source

### Hardware Wallet (for larger amounts)

A physical device, similar to a USB stick. The private key never leaves the device. Even on an unfamiliar computer it stays protected. Recommended as soon as you hold more than a few hundred euros in Bitcoin.

- **Bitbox02** (bitbox.swiss) – open source, Swiss Made
- **Trezor Safe 7** (trezor.io) – open source, well-established
- **Coldcard Mk4** (coldcard.com) – maximum security, for advanced users

> ⚠️ **The Source Matters**  
> Buy hardware wallets only directly from the manufacturer or from a trusted Bitcoin shop. Never via eBay, Amazon, or secondhand – the device could be tampered with.

---

→ [Chapter 3 – From Exchange to Your Own Wallet](chapter-03-from-exchange-to-wallet.md)
