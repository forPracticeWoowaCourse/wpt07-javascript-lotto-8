import LottoRepository from "../repository/LottoRepository.js";

class LottoService {
    #lottoRepository;
    #purchasedMoney;

    constructor(lottoRepository = new LottoRepository()) {
        this.#lottoRepository = lottoRepository;
        this.#purchasedMoney = 0;
    }

    purchase(money) {
        this.#purchasedMoney = money;
        this.#lottoRepository.purchaseAs(Math.floor(money / 1000));
    }

    calculateResult(numbers, bonusNumber) {
        const countRank = this.#lottoRepository.countByRanking(numbers, bonusNumber);
        const prize = Object.entries(countRank).reduce((acc, [key, value]) => {
            return acc + value * this.#getPrizeByRanking(key);
        }, 0);
        const profit = prize/this.#purchasedMoney;
        return {countRank: countRank, profit: profit};
    }

    #getPrizeByRanking(rank) {
        if(rank === 1) return 2000000000;
        if(rank === 2) return 30000000;
        if(rank === 3) return 1500000;
        if(rank === 4) return 50000;
        if(rank === 5) return 5000;
    }
}

export default LottoService;