/**
 * 策略模式
 * 定义: 定义一系列算法, 把它们一个个封装起来, 并且使它们可以互相替换
 */

// 面向对象版本

// 策略类
class StrategyS {
  calculate(salary) {
    return salary * 4;
  }
}

class StrategyA {
  calculate(salary) {
    return salary * 3;
  }
}

class StrategyB {
  calculate(salary) {
    return salary * 2;
  }
}

// 环境类
class Bonus {
  constructor() {
    this.salary = null;
    this.strategy = null;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  getBonus() {
    if (!this.strategy) {
      throw new Error("error");
    }

    return this.strategy.calculate(this.salary);
  }
}

// test -----------------------

const bonus = new Bonus();

bonus.setSalary(3000);
bonus.setStrategy(new StrategyA());
console.log(bonus.getBonus());
