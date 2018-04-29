export default function Subject({ name, aka, units = [] }) {
  this.name = name;
  this.aka = aka;
  this.units = units;
  this.createdAt = Date.now();
  this.lastOpening = null;
}
