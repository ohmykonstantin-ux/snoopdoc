export default function App() {
  const topMetrics = [
    { value: '51–146', label: 'Клиентов к декабрю' },
    { value: '1,7–5,5 млн ₽', label: 'Выручка за год' },
    { value: 'Июл — Окт', label: 'Безубыточность' },
    { value: '1,5 млн ₽', label: 'Раунд инвестиций' },
    { value: '3', label: 'Сценария развития' },
  ];

  const scenarios = [
    {
      name: 'Негативный сценарий',
      short: 'Медленный рост',
      clients: '51 клиент',
      revenue: '1,7 млн ₽',
      monthly: '276 тыс. ₽',
      breakeven: 'Декабрь 2026',
      featured: false,
    },
    {
      name: 'Консервативный сценарий',
      short: 'Основной',
      clients: '90 клиентов',
      revenue: '3,558 млн ₽',
      monthly: '635 тыс. ₽',
      breakeven: 'Июль 2026',
      featured: true,
    },
    {
      name: 'Позитивный сценарий',
      short: 'Быстрый рост',
      clients: '146 клиентов',
      revenue: '5,5 млн ₽',
      monthly: '1,02 млн ₽',
      breakeven: 'Октябрь 2026',
      featured: false,
    },
  ];

  const audience = ['Видеопродакшн', 'Студии графики', 'Кинопродакшн', 'Ивент-агентства', 'BTL', 'Digital'];

  const horizon = [
    { year: '2026', revenue: 4.5, costs: 5.3, profit: -0.8 },
    { year: '2027', revenue: 16, costs: 10, profit: 6 },
    { year: '2028', revenue: 35, costs: 20, profit: 15 },
  ];

  const reportBlocks = [
    {
      title: 'Формат взаимодействия',
      points: [
        'Ежемесячный короткий отчёт по проекту: выручка, расходы, остаток денег, ключевые события, статус продукта и продаж.',
        'Квартальный созвон по стратегии: что сработало, что не сработало, какие следующие гипотезы и приоритеты.',
        'Операционное управление остаётся за основателем и командой проекта без микроменеджмента со стороны инвестора.',
      ],
    },
    {
      title: 'Финансовый учёт и прозрачность',
      points: [
        'Финансовый учёт и бухгалтерию ведёт Надежда в рамках функции холдинга.',
        'Инвестор получает регулярную понятную отчётность, но без режима согласования каждой транзакции и без права тормозить операционную работу проекта.',
        'Основатель распоряжается бюджетом по своему усмотрению в рамках целей проекта, включая премии команде за важные вехи после инвестиций.',
      ],
    },
  ];

  const monthlyReport = {
    message: `СнупДок · отчёт инвестору · Июль 2026

Ключевые показатели
🟡 Выручка: 420 тыс. ₽
🟢 Расходы: 390 тыс. ₽
🟡 Прибыль за месяц: +30 тыс. ₽
🟢 Остаток денег: 890 тыс. ₽
🟡 Платящие клиенты: 4

Основные события и прогноз
🟢 Доделали внешний онбординг и шаблоны договоров.
🟡 Один клиент перешёл из пилота в оплату, ещё два близки к запуску.
🟢 Прогноз на следующий месяц — выйти на 5 платящих клиентов и закрыть вторую веху по продукту.

Фокус на следующий месяц
🔵 Добить коробочную версию.
🔵 Закрыть 5 платящих клиентов.
🔵 Протестировать первый заход в смежный сегмент.`,
  };

  return (
    <div className="min-h-screen bg-[#f3f5f8] text-[#101828]">
      {/* HEADER — один заголовок */}
      <section className="px-6 pt-10 pb-6 md:px-10 md:pt-14">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            <span className="text-red-500">Инвестиционное предложение</span> · <span className="text-[#2f76ff]">СнупДок</span>
          </h1>
          <p className="mt-3 text-base text-[#667085] md:text-lg">
            Март — Декабрь 2026 · Россия · SaaS-подписка + ПЭП по транзакции
          </p>
        </div>
      </section>

      {/* МЕТРИКИ */}
      <section className="px-6 py-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-5">
          {topMetrics.map((item) => (
            <div key={item.label} className="rounded-2xl border border-[#d8dee8] bg-[#f7f8fa] px-5 py-5 text-center shadow-[0_2px_8px_rgba(16,24,40,0.03)]">
              <div className="text-xl font-semibold tracking-tight text-[#2f76ff]">{item.value}</div>
              <div className="mt-1.5 text-sm text-[#667085]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* РЕЗЮМЕ */}
      <section className="px-6 pb-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#101828] md:text-3xl">1. Резюме</h2>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="leading-none">
                <span className="text-4xl font-bold tracking-tight text-[#2f76ff] md:text-5xl">Снуп</span>
                <span className="text-4xl font-bold tracking-tight text-[#101828] md:text-5xl">Док</span>
              </div>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#475467] md:text-lg">
                Быстрый документооборот для контент-продакшна. Формируйте договоры с командой в несколько кликов,
                подписывайте по СМС, храните и систематизируйте — всё в одном сервисе.
              </p>
              <p className="mt-3 text-sm text-[#667085] md:text-base">
                Отраслевые шаблоны, подписание на площадке, учёт РИД.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-base font-medium text-[#2f76ff]">
                snoop-doc.ru <span>→</span>
              </div>
            </div>

            {/* Иллюстрация: счастливый бухгалтер */}
            <div className="rounded-2xl border border-[#d8dee8] bg-gradient-to-br from-[#eef3ff] to-[#f0fdf4] p-6 shadow-[0_6px_20px_rgba(16,24,40,0.04)] flex items-center justify-center min-h-[280px]">
              <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs">
                {/* Фон-стол */}
                <rect x="40" y="200" width="240" height="12" rx="6" fill="#d1d9e6"/>
                {/* Стопка документов */}
                <rect x="60" y="155" width="80" height="48" rx="6" fill="white" stroke="#d8dee8" strokeWidth="1.5"/>
                <rect x="65" y="162" width="50" height="3" rx="1.5" fill="#c9d4e8"/>
                <rect x="65" y="169" width="40" height="3" rx="1.5" fill="#c9d4e8"/>
                <rect x="65" y="176" width="45" height="3" rx="1.5" fill="#c9d4e8"/>
                {/* Галочка на документе */}
                <circle cx="124" cy="170" r="10" fill="#2bbf5f"/>
                <path d="M119 170l3.5 3.5 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Ещё документ сзади */}
                <rect x="55" y="160" width="80" height="48" rx="6" fill="#f0f4ff" stroke="#d8dee8" strokeWidth="1.5" style={{zIndex: -1}}/>
                {/* Монетки */}
                <circle cx="200" cy="180" r="14" fill="#fbbf24" opacity="0.9"/>
                <circle cx="222" cy="186" r="10" fill="#f59e0b" opacity="0.85"/>
                <circle cx="210" cy="170" r="8" fill="#fcd34d" opacity="0.8"/>
                <text x="196" y="184" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">₽</text>
                {/* Тело */}
                <rect x="130" y="130" width="60" height="72" rx="14" fill="#2f76ff"/>
                {/* Руки */}
                <path d="M130 145 Q108 150 105 165 Q103 175 112 178" stroke="#2f76ff" strokeWidth="10" strokeLinecap="round" fill="none"/>
                <path d="M190 145 Q212 150 215 165 Q217 175 208 178" stroke="#2f76ff" strokeWidth="10" strokeLinecap="round" fill="none"/>
                {/* Шея */}
                <rect x="151" y="110" width="18" height="24" rx="6" fill="#f5c6a0"/>
                {/* Голова */}
                <circle cx="160" cy="95" r="34" fill="#f5c6a0"/>
                {/* Волосы */}
                <path d="M126 90 Q128 58 160 56 Q192 58 194 90 Q188 68 160 66 Q132 68 126 90Z" fill="#4a3728"/>
                {/* Глаза */}
                <ellipse cx="148" cy="93" rx="5" ry="6" fill="white"/>
                <ellipse cx="172" cy="93" rx="5" ry="6" fill="white"/>
                <circle cx="149" cy="94" r="3" fill="#2d1b0e"/>
                <circle cx="173" cy="94" r="3" fill="#2d1b0e"/>
                <circle cx="150" cy="92" r="1" fill="white"/>
                <circle cx="174" cy="92" r="1" fill="white"/>
                {/* Улыбка */}
                <path d="M149 107 Q160 116 171 107" stroke="#c0775a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                {/* Брови — довольные */}
                <path d="M143 86 Q148 83 153 86" stroke="#4a3728" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M167 86 Q172 83 177 86" stroke="#4a3728" strokeWidth="2" strokeLinecap="round" fill="none"/>
                {/* Галстук */}
                <path d="M156 130 L160 155 L164 130 L161 136 Z" fill="#ef4444"/>
                {/* Ноги */}
                <rect x="140" y="198" width="18" height="28" rx="6" fill="#1e3a5f"/>
                <rect x="162" y="198" width="18" height="28" rx="6" fill="#1e3a5f"/>
                {/* Туфли */}
                <ellipse cx="149" cy="226" rx="12" ry="6" fill="#111"/>
                <ellipse cx="171" cy="226" rx="12" ry="6" fill="#111"/>
                {/* Звёздочки радости */}
                <text x="88" y="80" fontSize="16" fill="#fbbf24">✦</text>
                <text x="220" y="75" fontSize="12" fill="#2f76ff">✦</text>
                <text x="240" y="100" fontSize="10" fill="#2bbf5f">✦</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* СЦЕНАРИИ */}
      <section className="px-6 py-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-sm font-medium uppercase tracking-widest text-[#2f76ff]">Финансовая логика</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
            Опираемся на консервативный сценарий
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#667085] md:text-base">
            Без агрессивного маркетинга, с ростом через прямые продажи, нетворкинг и первые внедрения.
          </p>

          <div className="mt-8 grid items-end gap-4 lg:grid-cols-[0.82fr_1fr_0.82fr]">
            {scenarios.map((scenario) => (
              <div
                key={scenario.name}
                className={
                  scenario.featured
                    ? 'rounded-2xl border border-[#d2d9e6] bg-[#eef3fb] p-6 shadow-[0_10px_28px_rgba(16,24,40,0.08)]'
                    : 'rounded-2xl border border-[#d9dfe8] bg-[#f7f8fa] p-5 shadow-[0_6px_18px_rgba(16,24,40,0.04)] opacity-75 lg:scale-[0.76]'
                }
              >
                <div className="text-xs font-medium uppercase tracking-wider text-[#2f76ff]">{scenario.name}</div>
                <h3 className={scenario.featured ? 'mt-1.5 text-2xl font-semibold text-[#0f172a]' : 'mt-1.5 text-xl font-semibold text-[#0f172a]'}>
                  {scenario.short}
                </h3>
                <div className="mt-4 space-y-2.5">
                  <div className="rounded-xl border border-[#d8dee8] bg-white p-3.5 shadow-sm">
                    <div className="text-xs text-[#667085]">К декабрю 2026</div>
                    <div className={scenario.featured ? 'mt-1 text-xl font-semibold text-[#0f172a]' : 'mt-1 text-lg font-semibold text-[#0f172a]'}>{scenario.clients}</div>
                  </div>
                  <div className="rounded-xl border border-[#d8dee8] bg-white p-3.5 shadow-sm">
                    <div className="text-xs text-[#667085]">Выручка за март–декабрь 2026</div>
                    <div className={scenario.featured ? 'mt-1 text-xl font-semibold text-[#0f172a]' : 'mt-1 text-lg font-semibold text-[#0f172a]'}>{scenario.revenue}</div>
                  </div>
                  <div className="rounded-xl border border-[#d8dee8] bg-white p-3.5 shadow-sm">
                    <div className="text-xs text-[#667085]">Ежемесячная выручка в декабре</div>
                    <div className={scenario.featured ? 'mt-1 text-xl font-semibold text-[#0f172a]' : 'mt-1 text-lg font-semibold text-[#0f172a]'}>{scenario.monthly}</div>
                  </div>
                  <div className="rounded-xl border border-[#d8dee8] bg-white p-3.5 shadow-sm">
                    <div className="text-xs text-[#667085]">Безубыточность</div>
                    <div className={scenario.featured ? 'mt-1 text-xl font-semibold text-[#0f172a]' : 'mt-1 text-lg font-semibold text-[#0f172a]'}>{scenario.breakeven}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 max-w-5xl text-sm leading-relaxed text-[#667085]">
            Консервативный сценарий выбран как основной для инвестпредложения. Негативный показывает нижнюю границу риска: даже в нём проект выходит на безубыточность до конца 2026 года. Позитивный показывает верхнюю границу потенциала при выходе на ивенты и другие смежные проектные рынки.
          </p>
        </div>
      </section>

      {/* ГРАФИК 3 ГОДА */}
      <section className="px-6 py-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-sm font-medium uppercase tracking-widest text-[#2f76ff]">Перспектива на 3 года</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
            Выручка, расходы и прибыль на горизонте трёх лет
          </h2>
          <div className="mt-6 rounded-2xl border border-[#d8dee8] bg-[#f7f8fa] p-5 md:p-6 shadow-[0_6px_18px_rgba(16,24,40,0.04)]">
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-[#475467]">
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#2f76ff]" />Выручка</div>
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#f04444]" />Расходы</div>
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#2bbf5f]" />Прибыль</div>
            </div>
            <div className="mt-5 flex justify-around gap-2 px-2 md:px-6">
              {horizon.map((item) => {
                const max = 35;
                const barMaxH = 200;
                const blueH = Math.max((item.revenue / max) * barMaxH, 28);
                const redH = Math.max((item.costs / max) * barMaxH, 28);
                const greenH = Math.max((Math.abs(item.profit) / max) * barMaxH, 12);
                return (
                  <div key={item.year} className="flex flex-col items-center gap-0" style={{ minWidth: 0 }}>
                    <div className="flex items-end gap-1.5" style={{ height: `${barMaxH + 28}px` }}>
                      {/* Выручка */}
                      <div className="flex flex-col items-center justify-end h-full w-10 md:w-14">
                        <div className="mb-1 text-xs font-semibold text-[#344054]">+{item.revenue}</div>
                        <div className="w-full rounded-t-lg bg-[#2f76ff]" style={{ height: `${blueH}px` }} />
                      </div>
                      {/* Расходы */}
                      <div className="flex flex-col items-center justify-end h-full w-10 md:w-14">
                        <div className="mb-1 text-xs font-semibold text-[#344054]">−{item.costs}</div>
                        <div className="w-full rounded-t-lg bg-[#f04444]" style={{ height: `${redH}px` }} />
                      </div>
                      {/* Прибыль */}
                      {item.profit >= 0 ? (
                        <div className="flex flex-col items-center justify-end h-full w-10 md:w-14">
                          <div className="mb-1 text-xs font-semibold text-[#344054]">+{item.profit}</div>
                          <div className="w-full rounded-t-lg bg-[#2bbf5f]" style={{ height: `${greenH}px` }} />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-end h-full w-10 md:w-14">
                          <div className="w-full rounded-b-lg bg-[#2bbf5f]" style={{ height: `${greenH}px` }} />
                          <div className="mt-1 text-xs font-semibold text-[#344054]">{item.profit}</div>
                        </div>
                      )}
                    </div>
                    <div className="mt-3 text-sm font-semibold text-[#344054]">{item.year}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ДЛЯ КОГО + ИНВЕСТПРЕДЛОЖЕНИЕ */}
      <section className="px-6 py-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-[#d8dee8] bg-[#f7f8fa] p-6 shadow-[0_6px_18px_rgba(16,24,40,0.04)]">
            <div className="text-sm font-medium uppercase tracking-widest text-[#2f76ff]">Для кого</div>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#0f172a]">Сначала контент-продакшн, потом смежные рынки</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#667085] md:text-base">
              Первый сегмент — малый видеопродакшн и студии графики. Дальше продукт можно расширять на ивент-агентства и другие проектные агентские бизнесы, где много подрядчиков, подписаний и повторяющегося документооборота.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {audience.map((item) => (
                <span key={item} className="rounded-full border border-[#cfe0ff] bg-[#eef5ff] px-3 py-1 text-sm text-[#2f76ff]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#2f76ff] bg-[#2f76ff] p-6 text-white shadow-[0_14px_36px_rgba(47,118,255,0.22)]">
            <div className="inline-flex rounded-full bg-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              Инвестпредложение
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">1,5 млн ₽ за 10% компании</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
              Сделка разбита на два этапа, чтобы снизить риск и для инвестора, и для проекта.
            </p>
            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <div className="text-xs text-white/65">Первый транш</div>
                <div className="mt-1 text-lg font-semibold">750 000 ₽ за 5%</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <div className="text-xs text-white/65">Второй транш</div>
                <div className="mt-1 text-lg font-semibold">750 000 ₽ за ещё 5%</div>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  После того как продукт доведён до внешней версии и появились 5 внешних платящих клиентов.
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-white/20 bg-white/10 p-4 text-sm leading-relaxed text-white/90">
              Если второй транш не происходит, у инвестора остаются только первые 5%. Возврат первого платежа не нужен.
            </div>
            <div className="mt-4 rounded-xl border border-white/20 bg-white/10 p-4">
              <div className="text-xs text-white/65">Как оформляем долю</div>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/90">
                <p><span className="font-semibold">Вариант 1.</span> Сразу открываем ООО с долями 90% / 10%, инвестор входит в состав участников в марте. Нужны нотариально заверенные документы, которые отдельно фиксируют: второй транш, конвертацию оставшейся части сделки в долю либо право на возврат / обратный выкуп части доли при невыполнении условий.</p>
                <p><span className="font-semibold">Вариант 2.</span> До июня действует инвестиционное соглашение, а оформление 10% доли происходит в июне, когда основатель приезжает в Россию.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ОТЧЁТНОСТЬ */}
      <section className="px-6 py-6 pb-12 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
          {reportBlocks.map((block) => (
            <div key={block.title} className="rounded-2xl border border-[#d8dee8] bg-[#f7f8fa] p-6 shadow-[0_6px_18px_rgba(16,24,40,0.04)]">
              <div className="text-sm font-medium uppercase tracking-widest text-[#2f76ff]">{block.title}</div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#667085] md:text-base">
                {block.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-7xl rounded-2xl border border-[#d8dee8] bg-[#f7f8fa] p-6 shadow-[0_6px_18px_rgba(16,24,40,0.04)]">
          <div className="text-sm font-medium uppercase tracking-widest text-[#2f76ff]">Формат ежемесячной отчётности</div>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#0f172a]">Пример сообщения в Telegram</h2>

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-xl rounded-2xl border border-[#d8dee8] bg-[#e9eef5] p-3 shadow-[0_10px_28px_rgba(16,24,40,0.08)]">
              <div className="rounded-xl border border-[#cfd8e3] bg-white shadow-sm overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#e4e7ec] bg-[#f7f8fa] px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-[#2f76ff] flex items-center justify-center text-white text-sm font-semibold">С</div>
                    <div>
                      <div className="text-sm font-semibold text-[#101828]">СнупДок · инвестор</div>
                      <div className="text-xs text-[#667085]">сегодня в 18:42</div>
                    </div>
                  </div>
                  <div className="text-[#98a2b3]">⋯</div>
                </div>

                <div className="bg-[#d9ecff] p-4">
                  <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm leading-7 text-[#101828] shadow-sm whitespace-pre-line">
                    {monthlyReport.message}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[#667085]">
            Важная оговорка: основатель вправе распределять бюджет в интересах проекта, включая премии команде за достигнутые вехи после привлечения инвестиций. Из первого раунда премии основателю не выплачиваются.
          </p>
        </div>
      </section>
    </div>
  );
}
