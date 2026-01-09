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

}

export default LottoService;