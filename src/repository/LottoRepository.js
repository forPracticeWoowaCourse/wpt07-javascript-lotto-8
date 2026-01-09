import {MissionUtils} from "@woowacourse/mission-utils/src";
import Lotto from "../domain/Lotto.js";

class LottoRepository {
    #lottos

    constructor() {
        this.#lottos = []
    }

    save(lotto) {
        this.#lottos.push(lotto);
    }

    purchaseAs(amount) {
        for (let i = 0; i < amount; i++) {
            this.save(new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)));
        }
    }

    findAllRankingByNumbersAndBonusNumber(numbers, bonusNumber) {
        return this.#lottos.map((v) => {
            v.calculateRanking(numbers, bonusNumber);
        });
    }

    count() {
        return this.#lottos.length;
    }

    clear() {
        this.#lottos = [];
    }
}

export default LottoRepository;