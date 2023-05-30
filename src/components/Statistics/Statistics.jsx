export default function statistics({ id, label, stats }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">4%</span>
        </li>
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
}
