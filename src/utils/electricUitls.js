/* eslint-disable no-unused-vars */
class ElectricalAppliance {
	constructor(name, power, hoursPerDay, area, loadCenter, breaker) {
		this.name = name;
		this.power = power; // Potencia en watts
		this.hoursPerDay = hoursPerDay; // Horas de uso por día
		this.area = area; // Área donde se ubica
		this.loadCenter = loadCenter; // Centro de carga
		this.breaker = breaker; // Interruptor
	}

	getDailyConsumption() {
		return this.power * this.hoursPerDay; // Consumo diario en Wh
	}

	getMonthlyConsumption() {
		return this.getDailyConsumption() * 30; // Consumo mensual en Wh
	}

	getInfo() {
		return {
			name: this.name,
			power: this.power,
			hoursPerDay: this.hoursPerDay,
			area: this.area,
			loadCenter: this.loadCenter,
			breaker: this.breaker,
			dailyConsumption: this.getDailyConsumption(),
			monthlyConsumption: this.getMonthlyConsumption(),
		};
	}
}
class ApplianceManager {
	constructor() {
		if (!ApplianceManager.instance) {
			this.appliances = [];
			ApplianceManager.instance = this;
		}

		return ApplianceManager.instance;
	}

	addAppliance(appliance) {
		this.appliances.push(appliance);
	}

	getAppliances() {
		return this.appliances;
	}

	getTotalMonthlyConsumption() {
		return this.appliances.reduce(
			(total, appliance) => total + appliance.getMonthlyConsumption(),
			0
		);
	}
}

const applianceManager = new ApplianceManager();
class ConsumptionCalculator {
	constructor(manager) {
		this.manager = manager;
	}

	calculateTotalConsumption() {
		const totalConsumption = this.manager.getTotalMonthlyConsumption();
		const totalConsumptionInKWh = totalConsumption / 1000; // Convertir Wh a kWh
		return {
			totalMonthlyConsumption: totalConsumption,
			totalMonthlyConsumptionInKWh: totalConsumptionInKWh,
			cost: this.calculateCost(totalConsumptionInKWh),
		};
	}

	calculateCost(totalConsumptionInKWh) {
		// Tarifa CFE (Ejemplo para el sector residencial en baja tensión)
		const baseRate = 0.792; // Tarifa base por kWh en MXN (Ejemplo)
		const intermediateRate = 0.941; // Tarifa intermedia por kWh en MXN (Ejemplo)
		const highRate = 2.802; // Tarifa alta por kWh en MXN (Ejemplo)

		let cost = 0;
		if (totalConsumptionInKWh <= 75) {
			cost = totalConsumptionInKWh * baseRate;
		} else if (totalConsumptionInKWh <= 150) {
			cost = 75 * baseRate + (totalConsumptionInKWh - 75) * intermediateRate;
		} else {
			cost =
				75 * baseRate +
				75 * intermediateRate +
				(totalConsumptionInKWh - 150) * highRate;
		}

		return cost;
	}
}

class ElectricalInstallation {
	constructor() {
		this.applianceManager = new ApplianceManager();
		this.consumptionCalculator = new ConsumptionCalculator(
			this.applianceManager
		);
	}

	addAppliance(name, power, hoursPerDay, area, loadCenter, breaker) {
		const appliance = new ElectricalAppliance(
			name,
			power,
			hoursPerDay,
			area,
			loadCenter,
			breaker
		);
		this.applianceManager.addAppliance(appliance);
	}

	getInstallationInfo() {
		return this.applianceManager
			.getAppliances()
			.map((appliance) => appliance.getInfo());
	}

	getTotalConsumption() {
		return this.consumptionCalculator.calculateTotalConsumption();
	}
}

// Crear instancia de la instalación eléctrica
const installation = new ElectricalInstallation();

// Agregar equipos eléctricos
installation.addAppliance('Fridge', 150, 24, 'Kitchen', 'Load Center 1', 'Breaker 1');
installation.addAppliance('TV', 100, 4, 'Living Room', 'Load Center 1', 'Breaker 2');
installation.addAppliance('Lamp', 60, 5, 'Bedroom', 'Load Center 2', 'Breaker 3');

// Obtener y mostrar la información de la instalación
console.log('Equipos registrados:');
installation.getInstallationInfo().forEach(info => console.log(info));

// Obtener y mostrar el consumo total y el costo
const totalConsumption = installation.getTotalConsumption();
console.log('Consumo total mensual:');
console.log(`Total (Wh): ${totalConsumption.totalMonthlyConsumption}`);
console.log(`Total (kWh): ${totalConsumption.totalMonthlyConsumptionInKWh}`);
console.log(`Costo (MXN): ${totalConsumption.cost.toFixed(2)}`);



