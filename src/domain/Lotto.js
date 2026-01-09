class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  calculateRanking(numbers, bonus) {
    const {count, isBonus} = this.#countSameAndBonus(numbers, bonus);
    if(count === 6) return 1;
    if(count === 5 && isBonus) return 2;
    if(count === 5) return 3;
    if(count === 4) return 4;
    if(count === 3) return 5;
    return false;
  }

  #countSameAndBonus(numbers, bonus) {
    let count = 0;
    let isBonus = false;
    this.#numbers.forEach(v => {
      if(numbers.includes(v)) count++;
      if(bonus === v) isBonus = true;
    })
    return {count: count, isBonus: isBonus};
  }
}

export default Lotto;
